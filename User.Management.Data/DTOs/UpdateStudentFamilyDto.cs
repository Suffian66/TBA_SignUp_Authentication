
namespace User.Management.Data.DTOs
{
    public class UpdateStudentFamilyDto
    {
        public string? FamilyMemberName { get; set; }
        public string? FamilyRelation { get; set; }
        public string? Qualification { get; set; }
        public string? PersonOccupation { get; set; }
        public int PersonIncome { get; set; }

    }
}
