

using Microsoft.AspNetCore.Identity;
using User.Management.Data.Models;
using User.Management.Data.Models;
using User.Management.Data.Models.Authentication.Login;
using User.Management.Data.Models.Authentication.SignUp;
using User.Management.Data.Models.Authentication.User;

namespace User.Management.Service.Services
{
    public interface IUserManagement
    {
        Task<ApiResponse<CreateUserResponse>> CreateUserwithTokenAsync(RegisterUser registerUser);

        Task<ApiResponse<List<string>>> AssignRoleToUserAsync(List<string> roles, ApplicationUser user);

        Task<ApiResponse<LoginOtpResponse>> GetOtpByLoginAsync(LoginModel loginModel);

    }
}
