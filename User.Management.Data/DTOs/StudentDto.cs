

using User.Management.Data.Models;

namespace User.Management.Data.Dto
{
    public class StudentDto
    {
        public string? FirstName { get; set; }
        public string? MiddleName { get; set; }
        public string? LastName { get; set; }
        public string? Gender { get; set; }
        public string? NamePrefix { get; set; }
        public string? DOB { get; set; }
        public string? CNIC { get; set; }
        public string? Occupation { get; set; }
        public int StudentId { get; set; }
        public int? GR_No { get; set; }
        public DateTime DateOfAdmission { get; set; }
        public string? LastClassAttended { get; set; }
        public DateTime? DateOfSchoolLeaving { get; set; }
        public string? MedicalNeeds { get; set; }
        public string? ClassName { get; set; }
        //public string familymembername { get; set; }
        //public string familyrelation { get; set; }
        //public string personoccupation { get; set; }
        //public int personincome { get; set; }
        public List<StudentFamily> StudentFamilies { get; set; }
    }
}
