
namespace User.Management.Data.DTOs
{
    public class UpdateMapSponsorDto
    {
        public int? DonationAmount { get; set; }
        public string? DonationFrequency { get; set; }
        public DateTime? DonationStartDate { get; set; }
        public string? DonationChannel { get; set; }
        public string? DonationSourceAccount { get; set; }
        public string? DonationDestinationAccount { get; set; }
        public string? Notes { get; set; }
        public string? Class { get; set; }
        public int StudentId { get; set; }
        public string Id { get; set; }
    }
}

