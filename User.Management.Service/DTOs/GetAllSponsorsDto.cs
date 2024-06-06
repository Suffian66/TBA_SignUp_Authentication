
namespace User.Management.Service.DTOs
{
    public class GetAllSponsorsDto
    {
        public int SponsorId { get; set; }
        public string Occupation { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateUpdated { get; set; }
        public bool StatusInfo { get; set; }
    }
}
