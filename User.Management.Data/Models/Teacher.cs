using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace User.Management.Data.Models
{
    public class Teacher
    {
        [Key]

        public int TeacherId { get; set; }
        [StringLength(10)]

        public string Father_HusbandName { get; set; }
        public string? DegreeQualification { get; set; }

        [StringLength(50)]
        public string? Certification { get; set; }

        public int? Salary { get; set; }


        [ForeignKey("UserId")]
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }


    }
}
