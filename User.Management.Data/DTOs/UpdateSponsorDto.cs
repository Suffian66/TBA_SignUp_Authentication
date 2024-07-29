using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace User.Management.Data.DTOs
{
    public class UpdateSponsorDto
    {
        public string? Id { get; set; }
        public string? FirstName { get; set; }
        public string? MiddleName { get; set; }
        public string? LastName { get; set; }
        public string Gender { get; set; }
        public string? NamePrefix { get; set; }
        public string? DOB { get; set; }
        public string? CNIC { get; set; }
        public string? Occupation { get; set; }
        public string? Address1 { get; set; }
        public string? Address2 { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? PostalCode { get; set; }
        public int? CountryId { get; set; }
        public int? AddressTypeId { get; set; }
        //public int CountryId { get; set; }
        //public int AddressTypeId { get; set; }


    }
}
