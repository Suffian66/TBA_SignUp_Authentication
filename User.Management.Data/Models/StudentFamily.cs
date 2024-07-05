using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace User.Management.Data.Models
{
    public class StudentFamily
    {
        [Key]
        public int StudentFamilyId { get; set; }
        public string FamilyMemberName { get; set;}
        public string FamilyRelation { get; set; }
        public string Qualification { get; set; }
        public string PersonOccupation {  get; set; }
        public int PersonIncome { get; set; }

        [ForeignKey("Student")]
        public int StudentId { get; set; }
        public virtual Student Student { get; set; }
    }
}
