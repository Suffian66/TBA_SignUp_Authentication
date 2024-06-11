using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace User.Management.Data.Models
{
    public class Class
    {

        [Key]
        public int ClassId { get; set; }
        public string ClassName { get; set; }

        //[ForeignKey("Section")]
        //public int SectionId { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsActive { get; set; }

        //public virtual ICollection<Student> Students { get; set; }
        //public virtual Section Section { get; set; }

    }
}
