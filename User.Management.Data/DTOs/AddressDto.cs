﻿using User.Management.DTOs;

namespace User.Management.Data.Dto
{
    public class AddressDto
    {
        public int AddressId { get; set; }
        public bool AddressPrimary { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PostalCode { get; set; }
        public int? CountryId { get; set; }
        public int? AddressTypeId { get; set; }
        public string? Country { get; set; }
        public string? AddressType { get; set; }
        public string Id { get; set; }
    }
}
