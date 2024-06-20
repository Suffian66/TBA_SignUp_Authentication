using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace User.Management.Data.Models
{
    public class Sponsor
    {
        [Key]
        public int SponsorId { get; set; }

        [ForeignKey("Users")]
        public string Id { get; set; }
        public virtual ApplicationUser Users { get; set; }
    }
}
