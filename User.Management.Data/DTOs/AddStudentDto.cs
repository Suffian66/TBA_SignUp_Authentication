using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using User.Management.Data.Models;

namespace User.Management.Data.DTOs
{
    public class AddStudentDto
    {
        //public int StudentId { get; set; }
        public int GR_No { get; set; }
        public DateTime DateOfAdmission { get; set; }
        public string? LastClassAttended { get; set; }
        public DateTime? DateOfSchoolLeaving { get; set; }
        public string? MedicalNeeds { get; set; }
        public string? ClassName { get; set; }
        public List<StudentFamily> StudentFamily { get; set; }
        //public string Id { get; set; }
    }
}
