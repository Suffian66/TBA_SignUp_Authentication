//using System;
//using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations.Schema;
//using User.Management.Data.Models;


//namespace User.Management.Data.Models.Sponsor
//{
//	public class SponsorDetails
//	{
//        [Key]
//        public int SponsorId { get; set; }

//        public string Occupation { get; set; }


//        [ForeignKey("ApplicationUser")]
//        public string Id { get; set; }
//        public virtual ApplicationUser ApplicationUser { get; set; }
//        public DateTime CreatedDate { get; set; }
//        public DateTime UpdatedDate { get; set; }
//        public bool StatusInfo { get; set; }
//    }
//}
