using Microsoft.AspNetCore.Identity;
using User.Management.Data.Models;
using User.Management.Data.Models.Authentication.Login;
using User.Management.Data.Models.Authentication.SignUp;
using User.Management.Data.Models.Authentication.User;


namespace User.Management.Service.Services
{
    public class UserManagementService : IUserManagement
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;


        public UserManagementService(UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;

        }

        public async Task<ApiResponse<List<string>>> AssignRoleToUserAsync(List<string> roles, ApplicationUser user)
        {
            var assignedRole = new List<string>();
            foreach (var role in roles)
            {
                if (await _roleManager.RoleExistsAsync(role))
                {
                    if (!await _userManager.IsInRoleAsync(user, role))
                    {
                        await _userManager.AddToRoleAsync(user, role);
                    }
                }
            }
            return new ApiResponse<List<string>>
            {
                IsSuccess = true,
                StatusCode = 200,
                Message = "Role has been assigned"
            ,
                Response = assignedRole
            };
        }

        public async Task<ApiResponse<CreateUserResponse>> CreateUserwithTokenAsync(RegisterUser registerUser)
        {
            var userExist = await _userManager.FindByEmailAsync(registerUser.Email);
            if (userExist != null)
            {
                return new ApiResponse<CreateUserResponse> { IsSuccess = false, StatusCode = 403, Message = "User Already Exists" };
            }


            //Add the User in the database
            ApplicationUser user = new()
            {
                Email = registerUser.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = registerUser.UserName,
                FirstName = registerUser.FirstName,
                MiddleName = registerUser.MiddleName,
                LastName = registerUser.LastName,
                Gender = registerUser.Gender,
                NamePrefix = registerUser.NamePrefix,
                DOB = registerUser.DOB,
                CNIC = registerUser.CNIC,
                Occupation = registerUser.Occupation,
                TwoFactorEnabled = true
            };
            var result = await _userManager.CreateAsync(user, registerUser.Password);
            if (result.Succeeded)
            {
                var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                return new ApiResponse<CreateUserResponse>
                {
                    Response = new CreateUserResponse()
                    {
                        User = user,
                        Token = token
                    },
                    IsSuccess = true,
                    StatusCode = 201,
                    Message = "User Created Successfully"
                };
            }
            else
            {
                return new ApiResponse<CreateUserResponse> { IsSuccess = false, StatusCode = 500, Message = "User Failed To Create" };
            }
        }

        public async Task<ApiResponse<LoginOtpResponse>> GetOtpByLoginAsync(LoginModel loginModel)
        {
            var user = await _userManager.FindByEmailAsync(loginModel.Email);
            if (user != null)
            {
                await _signInManager.SignOutAsync();
                await _signInManager.PasswordSignInAsync(user, loginModel.Password, false, true);
                if (user.TwoFactorEnabled)
                {
                    var token = await _userManager.GenerateTwoFactorTokenAsync(user, "Email");

                    return new ApiResponse<LoginOtpResponse>
                    {
                        Response = new LoginOtpResponse()
                        {
                            User = user,
                            Token = token,
                            IsTwoFactorEnable = user.TwoFactorEnabled
                        },
                        IsSuccess = true,
                        StatusCode = 200,
                        Message = $"OTP Sent To {user.Email}"
                    };
                }
                else
                {
                    return new ApiResponse<LoginOtpResponse>
                    {
                        Response = new LoginOtpResponse()
                        {
                            User = user,
                            Token = string.Empty,
                            IsTwoFactorEnable = user.TwoFactorEnabled,
                        },
                        IsSuccess = true,
                        StatusCode = 200,
                        Message = $"2FA is not enabled"
                    };
                }
            }
            else
            {
                return new ApiResponse<LoginOtpResponse>
                {
                    IsSuccess = false,
                    StatusCode = 404,
                    Message = $"User does not exist."
                };

            }

        }
    }
}
