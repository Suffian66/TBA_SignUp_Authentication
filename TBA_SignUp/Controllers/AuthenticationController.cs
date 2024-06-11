using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TBA_SignUp;
using User.Management.Data.Models;
using User.Management.Data.Models.Authentication.Login;
using User.Management.Data.Models.Authentication.SignUp;
using User.Management.Service.Services;

namespace User.Management.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IEmailService _emailService;
        private readonly IConfiguration _configuration;
        private readonly IUserManagement _userManagement;
    
        public AuthenticationController(UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager, IEmailService emailService,
            IUserManagement userManagement,
            SignInManager<ApplicationUser> signInManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _emailService = emailService;
            _userManagement = userManagement;
            _configuration = configuration;
        }

        [HttpPost]
        [Route("register-user")]
        public async Task<IActionResult> Register([FromBody] RegisterUser registerUser)
        {
            var tokenResponse = await _userManagement.CreateUserwithTokenAsync(registerUser);
            if (tokenResponse.IsSuccess)
            {
                await _userManagement.AssignRoleToUserAsync(registerUser.Roles, tokenResponse.Response.User);
                var confirmationLink = Url.Action(nameof(ConfirmEmail), "Authentication", new { tokenResponse.Response.Token, email = registerUser.Email }, Request.Scheme);
                var message = new Message(new string[] { registerUser.Email! }, "Confirmation Email Link", confirmationLink!);
                _emailService.SendEmail(message);

                return StatusCode(StatusCodes.Status200OK,
                         new Response { Status = "Success", Message = "Email Sent For Verification" });
            }

            return StatusCode(StatusCodes.Status500InternalServerError,
                         new Response { Message = tokenResponse.Message, IsSuccess = false });
        }

        [HttpGet("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail(string token, string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user != null)
            {
                var result = await _userManager.ConfirmEmailAsync(user, token);
                if (result.Succeeded)
                {
                    // Create your custom HTML content
                    string customHtml = @"<html>
                                       
            <head>
                <style>
                    body {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                    }
                    .verification-box {
                        background-color: white;
                        padding: 20px;
                        border: 1px solid #ddd;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        text-align: center;
                        border-radius: 8px;
                    }
                    .verification-box h1 {
                        margin: 0;
                        font-size: 24px;
                        color: #333;
                    }
                    .verification-box p {
                        margin: 10px 0;
                        font-size: 18px;
                        color: #666;
                    }
                    .verification-box a {
                        color: #007BFF;
                        text-decoration: none;
                    }
                    .verification-box a:hover {
                        text-decoration: underline;
                    }
                </style>
            </head>
            <body>
                <div class='verification-box'>
                    <h1>Email Confirmed</h1>
                    <p>Your email has been successfully confirmed.</p>
                    <p>Redirect to <a href='http://localhost:5173/'>login</a></p>
                </div>
            </body>
            </html>";

                    // Return the HTML content with 200 OK status
                    return Content(customHtml, "text/html");
                }
            }
            string errorHtml = "<html><body><h1>Error</h1><p>This user does not exist!</p></body></html>";

            // Return the HTML content with 500 Internal Server Error status
            return StatusCode(StatusCodes.Status500InternalServerError, Content(errorHtml, "text/html"));
        }

        //[HttpPost]
        //[Route("login")]
        //public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        //{
        //    var loginOtpResponse = await _userManagement.GetOtpByLoginAsync(loginModel);
        //    if (loginOtpResponse.Response != null)
        //    {
        //        var user = loginOtpResponse.Response.User;
        //        if (user.TwoFactorEnabled && await _userManager.CheckPasswordAsync(user, loginModel.Password))
        //        {
        //            var token = loginOtpResponse.Response.Token;
        //            var message = new Message(new string[] { user.Email! }, "OTP Confirmation", token);
        //            _emailService.SendEmail(message);

        //            return StatusCode(StatusCodes.Status200OK,
        //             new Response { IsSuccess = loginOtpResponse.IsSuccess, Status = "Success", Message = $"We have sent an OTP to your Email {user.Email}" });
        //        }
        //        if (user != null && await _userManager.CheckPasswordAsync(user, loginModel.Password))
        //        {
        //            var authClaims = new List<Claim>
        //        {
        //            new Claim(ClaimTypes.Name, user.Email),
        //            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        //        };
        //            var userRoles = await _userManager.GetRolesAsync(user);
        //            foreach (var role in userRoles)
        //            {
        //                authClaims.Add(new Claim(ClaimTypes.Role, role));
        //            }

        //            var jwtToken = GetToken(authClaims);

        //            var claimsIdentity = new ClaimsIdentity(authClaims, CookieAuthenticationDefaults.AuthenticationScheme);
        //            var authProperties = new AuthenticationProperties
        //            {
        //                IsPersistent = true, // Keep the cookie beyond the session
        //                ExpiresUtc = DateTimeOffset.UtcNow.AddMinutes(60) // Set a proper expiration
        //            };
        //            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity), authProperties);


        //            return Ok(new
        //            {
        //                token = new JwtSecurityTokenHandler().WriteToken(jwtToken),
        //                expiration = jwtToken.ValidTo
        //            });
        //            //returning the token...

        //        }
        //    }
        //    return Unauthorized();

        //}

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            var user = await _userManager.FindByEmailAsync(loginModel.Email);
            if (user != null && await _userManager.CheckPasswordAsync(user, loginModel.Password))
            {
                var authClaims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.Email),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        };

                var userRoles = await _userManager.GetRolesAsync(user);
                foreach (var role in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, role));
                }

                var jwtToken = GetToken(authClaims);

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(jwtToken),
                    expiration = jwtToken.ValidTo
                });
            }
            return Unauthorized();
        }


        [HttpPost]
        [Route("login-2FA")]
        public async Task<IActionResult> LoginWithOTP(string code, string Email)
        {
            var user = await _userManager.FindByEmailAsync(Email);
            var signIn = await _signInManager.TwoFactorSignInAsync("Email", code, false, false);
            if (signIn.Succeeded)
            {
                if (user != null)
                {
                    var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };
                    var userRoles = await _userManager.GetRolesAsync(user);
                    foreach (var role in userRoles)
                    {
                        authClaims.Add(new Claim(ClaimTypes.Role, role));
                    }

                    var jwtToken = GetToken(authClaims);
                    //var tokenString = new JwtSecurityTokenHandler().WriteToken(jwtToken);

                    //var cookieOptions = new CookieOptions
                    //{
                    //    HttpOnly = true,
                    //    Secure = true, // Ensure this is true for HTTPS
                    //    SameSite = SameSiteMode.Strict,
                    //    Expires = jwtToken.ValidTo
                    //};

                    //Response.Cookies.Append("auth_token", tokenString, cookieOptions);

                    // Set the authentication cookie


                    return Ok(new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(jwtToken),
                        expiration = jwtToken.ValidTo
                    });
                    //returning the token...
                }
            }
            return StatusCode(StatusCodes.Status404NotFound,
                new Response { Status = "Failed", Message = $"Invalid Code" });
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("forgot-password")]
        public async Task<IActionResult> ForgotPassword(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user != null)
            {
                var token = await _userManager.GeneratePasswordResetTokenAsync(user);
                var forgotPasswordlink = Url.Action(nameof(ResetPassword), "Authentication", new { token, email = user.Email }, Request.Scheme);
                var message = new Message(new string[] { user.Email! }, "Forgot Password Link", forgotPasswordlink);
                _emailService.SendEmail(message);
                return StatusCode(StatusCodes.Status200OK,
                 new Response { Status = "Success", Message = $"Password change request has been sent to your Email {user.Email}, Please click the link and verify." });
            }
            return StatusCode(StatusCodes.Status400BadRequest,
             new Response { Status = "Error", Message = $"Couldn't send link to email, something went wrong." });

        }

        [HttpGet("reset-password")]
        public async Task<IActionResult> ResetPassword(string token, string email)
        {
            var model = new ResetPassword { Token = token, Email = email };

            return Ok(new
            { model });
        }


        [HttpPost]
        [AllowAnonymous]
        [Route("reset-password")]
        public async Task<IActionResult> ResetPassword(ResetPassword resetPassword)
        {
            var user = await _userManager.FindByEmailAsync(resetPassword.Email);
            if (user != null)
            {
                var resetPassResult = await _userManager.ResetPasswordAsync(user, resetPassword.Token, resetPassword.Password);
                if (!resetPassResult.Succeeded)
                {
                    foreach (var error in resetPassResult.Errors)
                    {
                        ModelState.AddModelError(error.Code, error.Description);
                    }
                    return Ok(ModelState);
                }
                return StatusCode(StatusCodes.Status200OK,
                 new Response { Status = "Success", Message = $"Password has been changed." });
            }
            return StatusCode(StatusCodes.Status400BadRequest,
                 new Response { Status = "Errors", Message = $"Password couldn't be changed." });
        }

        
        private JwtSecurityToken GetToken(List<Claim> authClaims)
        {
            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
                issuer: _configuration["JWT:ValidIssuer"],
                audience: _configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddDays(2),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );

            return token;
        }


    }
}
