using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace User.Management.Data.Models
{
    public class Address
    {
        [Key]
        public int AddressId { get; set; }
        public bool AddressPrimary { get; set; }

        [Required]
        [MaxLength(255)]
        public string? Address1 { get; set; }

        [MaxLength(255)]
        public string? Address2 { get; set; }

        [Required]
        [MaxLength(100)]
        public string? City { get; set; }

        [Required]
        [MaxLength(100)]
        public string? State { get; set; }

        [MaxLength(20)]
        public string? PostalCode { get; set; }

        public int? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }

        public int? UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }

        public bool IsActive { get; set; }

        
        [ForeignKey("User")]
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }

        [ForeignKey("CountryId")]
        public int? CountryId { get; set; }
        public virtual LookUpCategoryDetail CountryDetail { get; set; }

        [ForeignKey("AddressTypeId")]
        public int? AddressTypeId { get; set; }
        public virtual LookUpCategoryDetail AddressDetail { get; set; }
    }
}
