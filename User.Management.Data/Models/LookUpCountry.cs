using System.ComponentModel.DataAnnotations;

namespace User.Management.Data.Models
{
    public class LookUpCountry
    {
        [Key]
        public int LookUpCountryId { get; set; }
        public int Lang { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }

        public DateTime CreatedDate { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsActive { get; set; }


    }
}
