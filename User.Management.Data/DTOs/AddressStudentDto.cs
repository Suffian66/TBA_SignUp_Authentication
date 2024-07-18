using User.Management.DTOs;

namespace User.Management.Data.Dto
{
    public class AddressStudentDto
    {
        public int StudentAddressId { get; set; }
        public bool AddressPrimary { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PostalCode { get; set; }
        public string? Country { get; set; }
        public string? AddressType { get; set; }
        public int StudentId { get; set; }
    }
}
