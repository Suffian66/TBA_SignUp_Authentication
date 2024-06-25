namespace User.Management.Data.Dto
{
    public class AddressDto
    {
        public int AddressId { get; set; }
        public AddressTypeDto AddressType { get; set; }
        public bool AddressPrimary { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PostalCode { get; set; }
        public CountryDto Country { get; set; }
    }
}
