﻿namespace User.Management.Data.DTOs
{
    public class AddStudentDto
    {
        public string? FirstName { get; set; }
        public string? MiddleName { get; set; }
        public string? LastName { get; set; }
        public string? Gender { get; set; }
        public int GenderId { get; set; }
        public string? DOB { get; set; }
        public int GR_No { get; set; }
        public string? Language { get; set; }
        public int LanguageId { get; set; }
        public string? ResidenceStatus { get; set; }
        public int ResidenceId { get; set; }
        public DateTime? DateOfAdmission { get; set; }
        public string? LastClassAttended { get; set; }
        public DateTime? DateOfSchoolLeaving { get; set; }
        public string? MedicalNeeds { get; set; }
        public string? Class { get; set; }
        public int ClassId { get; set; }
        public List<AddStudentFamilyDto> StudentFamilies { get; set; }
    }
}
