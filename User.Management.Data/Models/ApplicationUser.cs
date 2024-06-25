
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace User.Management.Data.Models
{
    public class ApplicationUser : IdentityUser
    {
        //public string? RefreshToken { get; set; }

        //public DateTime RefreshTokenExpiry { get; set; }

        //[Required(ErrorMessage = "Email is required")]
        //public string Email { get; set; }

        //[Required(ErrorMessage = "Password is required")]
        //public string Password { get; set; }

        [Required(ErrorMessage = "First Name is required")]
        public string FirstName { get; set; }

        public string? MiddleName { get; set; }

        [Required(ErrorMessage = "Last Name is required")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Gender is required")]
        public string Gender { get; set; }

        public string? NamePrefix { get; set; }

        [Required(ErrorMessage = "DOB is required")]
        public string DOB { get; set; }

        [Required(ErrorMessage = "CNIC is required")]
        public string CNIC { get; set; }

        public string? Occupation { get; set; }

        public DateTime? DateCreated { get; set; }

        public DateTime? DateUpdated { get; set; }

        public bool StatusInfo { get; set; }

        public virtual Teacher Teacher { get; set; }

        //public int StudentId { get; set; }
        //public virtual Student Student { get; set; }
        public ICollection<MapClassSubjectTeacher> MapClassSubjectTeachers { get; set; }
    }
}
