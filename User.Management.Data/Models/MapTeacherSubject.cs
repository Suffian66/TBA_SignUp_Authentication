
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace User.Management.Data.Models
{
    public class MapTeacherSubject
    {
        [Key]
        public int MapTeacherSubjectId { get; set; }

        [ForeignKey("Users")]
        public string Id { get; set; }
        public virtual ApplicationUser Users { get; set; }

        [ForeignKey("Class")]
        public int ClassId { get; set; }
        public virtual Class Class { get; set; }

        [ForeignKey("Subject")]
        public int SubjectId { get; set; }
        public virtual Subject Subject { get; set; }


    }
}
