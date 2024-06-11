using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace User.Management.Data.Models
{
    public class Student
    {
        [Key]
        public int StudentId { get; set; }
        public int GR_No { get; set; }
        public string StudentName { get; set; }
        public string FatherName { get; set; }
        //public string ContactNo { get; set; }
        public string? LastClassAttended { get; set; }
        public DateTime? DateOfSchoolLeaving { get; set; }
        public string? MedicalNeeds { get; set; }
        public string FatherOccupation { get; set; }
        public int FatherIncome { get; set; }
        public string? NameOfDependent { get; set; }
        public int CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsActive { get; set; }

        [ForeignKey("Class")]
        public int ClassId { get; set; }
        public virtual Class Class { get; set; }

        //[ForeignKey("Id")]
        //public string Id { get; set; }
        //public virtual ApplicationUser Users { get; set; }
    }
}
