namespace User.Management.Data.DTOs
{
    public class UpdateStudentAttendanceDto
    {
        public int StudentAttendanceId { get; set; }
        public bool Present { get; set; }
        public bool Absent { get; set; }
        public bool Leave { get; set; }
        public DateTime? AttendanceDate { get; set; }
        public string? Remarks { get; set; }
        public int? ClassId { get; set; }
        public int StudentId { get; set; }
    }
}
