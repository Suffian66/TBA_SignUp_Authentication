using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace User.Management.Data.Models
{
    public class LookUpCategoryDetail
    {
        [Key]
        public int LookUpCtgDetailId { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }

        public DateTime CreatedDate { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsActive { get; set; }

        [ForeignKey("LookUpCtgId")]
        public int LookUpCtgId { get; set; }
        public virtual LookUpCategory LookUpCategory { get; set; }

    }
}
