namespace User.Management.Data.Dtos
{
    public class MapClassSubjectTeacherDto
    {
        public int MapClassSubjectTeacherId { get; set; }
        public int ClassId { get; set; }
        public int SubjectId { get; set; }
        public string TeacherAssistantId { get; set; }
        public string TeacherId { get; set; }
        public int PeriodId { get; set; }
    }
}
