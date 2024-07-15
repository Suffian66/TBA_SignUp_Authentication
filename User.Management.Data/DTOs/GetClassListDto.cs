namespace User.Management.Data.DTOs
{


    public class GetClassListDto
    {
        public string Class { get; set; }
        public int StudentCount { get; set; }
    }

    public class StudentListDto
    {
        public int StudentId { get; set; }
        public int GR_No { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Class { get; set; }
    }
}