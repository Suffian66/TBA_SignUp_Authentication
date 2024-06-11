
namespace User.Management.Data.Dto
{
    public class StudentDto
    {
        public int GR_No { get; set; }
        public string StudentName { get; set; }
        public string FatherName { get; set; }
        //public string ContactNo { get; set; }
        public string? LastClassAttended { get; set; }
        public DateTime? DateOfSchoolLeaving { get; set; }
        public string? MedicalNeeds { get; set; }
        public string FatherOccupation { get; set; }
        public int FatherIncome { get; set; }
        public string? NameOfDependent { get; set; }
        public int ClassId { get; set; }
        public string ClassName { get; set; }
    }
}
