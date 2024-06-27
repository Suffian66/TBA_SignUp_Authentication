
using User.Management.Data.Dto;
using User.Management.Data.DTOs;

namespace User.Management.Service.Services
{
    public interface ISponsor
    {
        public Task<IEnumerable<SponsorDto>> GetAllSponsors();
        public SponsorDto GetSponsorById(string sponsorId);
    }
}
