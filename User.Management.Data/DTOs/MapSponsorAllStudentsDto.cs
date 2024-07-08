namespace User.Management.Data.DTOs
{
    public class MapSponsorAllStudentsDto
    {
        public string? StudentsReports { get; set; }
        public int? DonationAmount { get; set; }
        public string? DonationFrequency { get; set; }
        public DateTime? DonationStartDate { get; set; }
        public string? DonationChannel { get; set; }
        public string? DonationSourceAccount { get; set; }
        public string? DonationDestinationAccount { get; set; }
        public string? Notes { get; set; }
        public int StudentId { get; set; }
        public string Id { get; set; }
        public int GR_No { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Class { get; set; }

    }
}
