using System.ComponentModel.DataAnnotations;

namespace User.Management.Data.Models
{
    public class Section
    {

        [Key]
        public int SectionId { get; set; }
        public string SectionName { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsActive { get; set; }
    }
}
