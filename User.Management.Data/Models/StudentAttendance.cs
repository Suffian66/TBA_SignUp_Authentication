using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace User.Management.Data.Models
{
    public class StudentAttendance
    {
        [Key]
        public int StudentAttendanceId { get; set; }
        public bool Attandance { get; set; }
        public DateTime? AttendanceDate { get; set; }
        public string? Remarks { get; set; }

        [ForeignKey("ClassId")]
        public int? ClassId { get; set; }
        public virtual LookUpCategoryDetail ClassDetail { get; set; }

        [ForeignKey("Students")]
        public int StudentId { get; set; }
        public virtual Student Students { get; set; }
    }
}
