
namespace User.Management.Service.DTOs
{
    public class GetAllSponsorsDto
    {
        public int SponsorId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string? MiddleName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string? NamePrefix { get; set; }
        public string DOB { get; set; }
        public string CNIC { get; set; }
        public string Occupation { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateUpdated { get; set; }
        public bool StatusInfo { get; set; }
    }
}
