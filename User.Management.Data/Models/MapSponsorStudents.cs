using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace User.Management.Data.Models
{
    public class MapSponsorStudents
    {
        public int MapSponsorStudentsId { get; set; }
        public string? StudentsReports { get; set; }
        public int? DonationAmount { get; set; }
        public string? DonationFrequency { get; set; }
        public DateTime? DonationStartDate { get; set; }
        public string? DonationChannel { get; set; }
        public string? DonationSourceAccount { get; set; }
        public string? DonationDestinationAccount { get; set; }
        public string? Notes { get; set; }
        
        //[ForeignKey("Students")]
        public int StudentId { get; set; }
        public virtual Student Students { get; set; }

        //[ForeignKey("Sponsors")]
        public int SponsorId { get; set; }
        public virtual Sponsor Sponsors { get; set; }

    }
}
