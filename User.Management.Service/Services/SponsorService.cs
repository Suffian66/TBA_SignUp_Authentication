using Microsoft.EntityFrameworkCore;
using User.Management.Data.Dto;
using User.Management.Data.DTOs;
using User.Management.Data.Migrations;
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
            var user = _context.Users.FirstOrDefault(x => x.Id == sponsorId);
            var address = _context.Address.Include(a => a.CountryDetail).Include(a => a.AddressDetail).FirstOrDefault(a => a.UserId == sponsorId);

            if (user != null)
            {
                var result = new SponsorDto
                {
                    Id = user.Id,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    MiddleName = user.MiddleName,
                    Gender = user.Gender,
                    NamePrefix = user.NamePrefix,
                    DOB = user.DOB,
                    CNIC = user.CNIC,
                    Occupation = user.Occupation,
                    Address1 = address?.Address1,
                    Address2 = address?.Address2,
                    City = address?.City,
                    State = address?.State,
                    PostalCode = address?.PostalCode,
                    Country = address?.CountryDetail?.Title,
                    AddressType = address?.AddressDetail?.Title,
                };
                return result;
            }
            return null;
        }

        public async Task<UpdateSponsorDto> UpdateSponsorAsync(string sponsorId, UpdateSponsorDto updateDto)
        {
            var user = _context.Users.FirstOrDefault(x => x.Id == sponsorId);
            var address = _context.Address.FirstOrDefault(x => x.UserId == user.Id);
            var countryDetail = _context.LookupsCategoryDetail.FirstOrDefault(a => a.LookUpCtgDetailId == address.CountryId);
            var addressTypeDetail = _context.LookupsCategoryDetail.FirstOrDefault(a => a.LookUpCtgDetailId == address.AddressTypeId);

            if (user == null || address == null)
            {
                return null; 
            }

            user.Id = sponsorId;
            user.FirstName = updateDto.FirstName;
            user.LastName = updateDto.LastName;
            user.MiddleName = updateDto.MiddleName;
            user.Gender = updateDto.Gender;
            user.NamePrefix = updateDto.NamePrefix;
            user.DOB = updateDto.DOB;
            user.CNIC = updateDto.CNIC;
            user.Occupation = updateDto.Occupation;
            //address.UserId = sponsorId;
            address.Address1 = updateDto.Address1;
            address.Address2 = updateDto.Address2;
            address.City = updateDto.City;
            address.State = updateDto.State;
            address.PostalCode = updateDto.PostalCode;
            address.CountryId = updateDto.CountryId;
            address.AddressTypeId = updateDto.AddressTypeId;

            await _context.SaveChangesAsync();
            return updateDto;

        }

    }
}

