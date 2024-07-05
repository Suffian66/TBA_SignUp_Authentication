using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace User.Management.Data.Models
{
    public class Student
    {
        [Key]
        public int StudentId { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        //public string Gender { get; set; }
        public string DOB { get; set; }
        public int GR_No { get; set; }
        //public string Language { get; set; }
        //public string ResidenceStatus { get; set; }
        public DateTime? DateOfAdmission { get; set; }
        public string? LastClassAttended { get; set; }
        public DateTime? DateOfSchoolLeaving { get; set; }
        public string? MedicalNeeds { get; set; }
        public int CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsActive { get; set; }

        [ForeignKey("ClassId")]
        public int? ClassId { get; set; }
        public virtual LookUpCategoryDetail ClassDetail { get; set; }

        [ForeignKey("LanguageId")]
        public int? LanguageId { get; set; }
        public virtual LookUpCategoryDetail LanguageDetail { get; set; }

        [ForeignKey("GenderId")]
        public int? GenderId { get; set; }
        public virtual LookUpCategoryDetail GenderDetail { get; set; }

        [ForeignKey("ResidenceId")]
        public int? ResidenceId { get; set; }
        public virtual LookUpCategoryDetail ResidenceDetail { get; set; }

    }
}
