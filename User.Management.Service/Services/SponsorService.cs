using Microsoft.EntityFrameworkCore;
using User.Management.Data.Models;
using User.Management.Service.DTOs;

namespace User.Management.Service.Services
{
    public class SponsorService : ISponsorService
    {
        private readonly ApplicationDbContext _context;
        public SponsorService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<GetAllSponsorsDto?>> GetAllSponsors()
        {
            var sponsors = await _context.SponsorDetails.ToListAsync();
            var users = await _context.Users.ToListAsync();

            var result = users.Select(user => {
                var currentSponsor = sponsors.FirstOrDefault(sponsor => sponsor.UserId == user.UserId);

                if (currentSponsor != null)
                {
                    return new GetSponsor
                    {
                        SponsorDetailId = currentSponsor.SponsorDetailId,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        FatherName = user.FatherName,
                        gender = user.gender,
                        PhoneNo = user.PhoneNo,
                        email = user.email,
                        Address = user.Address,
                        Occupation = currentSponsor.Occupation,
                        City = currentSponsor.City,
                        Country = currentSponsor.Country
                    };
                }

                return null;

            });

            return result;

        }

        //public void AddSponsor(GetSponsor sponsor)
        //{
            
        //}

        //public void DeleteSponsor(int sponsorId)
        //{
        //    throw new NotImplementedException();
        //}


        //public GetSponsor? GetSponsorById(int sponsorId)
        //{
        //    throw new NotImplementedException();
        //}

        //public void UpdateSponsor(int sponsorId, UpdateSponsor sponsorUpdate)
        //{
        //    throw new NotImplementedException();
        //}
    }
}
