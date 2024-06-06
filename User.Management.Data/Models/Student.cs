﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace User.Management.Data.Models
{
    public class Student
    {
        [Key]
        public int StudentId { get; set; }
        public int GR_No { get; set; }
        public string FatherName { get; set; }
        public string ContactNo { get; set; }
        public string? LastClassAttendent { get; set; }
        public DateTime? DateOfSchoolLeaving { get; set; }
        public string? MedicalNeeds { get; set; }
        public string FatherOccupation { get; set; }
        public int FatherIncome { get; set; }
        public string? NameOfDependent { get; set; }
        public int CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsActive { get; set; }

        [ForeignKey("Classes")]
        public int ClassId { get; set; }

        public virtual Classes Classes { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }

        public virtual User User { get; set; }
    }
}
