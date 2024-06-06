using System.ComponentModel.DataAnnotations.Schema;

namespace User.Management.Data.Models
{
    public class Address
    {

        public string AddressType { get; set; }
        public bool AddressPrimary { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }

        public DateTime CreatedDate { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsActive { get; set; }



        [ForeignKey("Id")]
        public string Id { get; set; }
        public virtual ApplicationUser User { get; set; }


    }
}
