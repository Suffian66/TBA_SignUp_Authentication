namespace User.Management.Data.DTOs
{
    public class GetTeacherAttendanceDto
    {
        public int TeacherAttendanceId { get; set; }
        public bool Present { get; set; }
        public bool Absent { get; set; }
        public bool Leave { get; set; }
        public DateTime? AttendanceDate { get; set; }
        public string? Remarks { get; set; }
        public string UserId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }



    }
}
