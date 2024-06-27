using Microsoft.EntityFrameworkCore;
using User.Management.Data.Dto;
using User.Management.Data.DTOs;
using User.Management.Data.Models;

namespace User.Management.Service.Services
{
    public class SponsorService : ISponsor
    {
        private readonly ApplicationDbContext _context;

        public SponsorService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<SponsorDto>> GetAllSponsors()
        {
           var users = await _context.Users.ToListAsync();

            var sponsors = users.Select(user => new SponsorDto
            {
                Id = user.Id,
                FirstName = user.FirstName,
                MiddleName = user.MiddleName,
                LastName = user.LastName,
                Gender = user.Gender,
                NamePrefix = user.NamePrefix,
                DOB = user.DOB,
                CNIC = user.CNIC,
                Occupation = user.Occupation
            }).ToList();
            return sponsors;
        }

        public SponsorDto GetSponsorById(string sponsorId)
        { 
            var users = _context.Users.FirstOrDefault(x => x.Id == sponsorId);

            if (users != null) 
            {
                var result = new SponsorDto
                {
                    Id = users.Id,
                    FirstName = users.FirstName,
                    LastName = users.LastName,
                    MiddleName = users.MiddleName,
                    Gender = users.Gender,
                    NamePrefix = users.NamePrefix,
                    DOB = users.DOB,
                    CNIC = users.CNIC,
                    Occupation = users.Occupation,
                };
                return result;
            }
            return null;
        }

    }
}

