﻿using System.ComponentModel.DataAnnotations;

namespace User.Management.Data.Models.Authentication.Login
{
    public class LoginModel
    {
        [Required(ErrorMessage = "Username is Required")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Password is Required")]
        public string? Password { get; set; }

    }
}
