using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace User.Management.Data.Models
{
    public class MapClassSubjectTeacher
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MapClassSubjectTeacherId { get; set; }

        public int ClassId { get; set; }

        public int SubjectId { get; set; }

        public string TeacherAssistantId { get; set; }

        public string TeacherId { get; set; }

        public int PeriodId { get; set; }
        public virtual LookUpCategoryDetail LookUpCategoryDetail { get; set; }
        public virtual ApplicationUser User { get; set; }

    }
}
