using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using User.Management.Data.Dto;
using User.Management.Data.Models;

namespace User.Management.Services
{
    public class AddressService : IAddressService
    {
        private readonly ApplicationDbContext _context;

        public AddressService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<AddressDto>> GetAllAddressesAsync()
        {
            try
            {
                var addresses = await _context.Address
                                         .Include(a => a.CountryDetail)
                                         .Include(a => a.AddressDetail)
                                         .Include(a => a.User)
                                         .ToListAsync();

                var result = addresses.Select(a => new AddressDto
                {
                    AddressId = a.AddressId,
                    AddressPrimary = a.AddressPrimary,
                    Address1 = a.Address1,
                    Address2 = a.Address2,
                    Country = a.CountryDetail?.Title,
                    AddressType = a.AddressDetail?.Title,
                    City = a.City,
                    PostalCode = a.PostalCode,
                    State = a.State,
                    Id = a.UserId
                    }).ToList();

                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error in GetAllAddressesAsync: {ex.ToString()}"); 
                throw; 
            }
        }


        public async Task<Address?> GetAddressByIdAsync(string id)
        {
            if(id == null)
            {
                return null;   
            }
            var result = _context.Address.FirstOrDefault(x => x.UserId == id);
            return result;
        }

        public async Task<StudentAddress> GetStudentAddressByIdAsync(int id)
        {

            return await _context.StudentAddress.FindAsync(id);
        }


        public async Task<AddressDto> CreateAddressAsync(AddressDto address)
        {
            var addressEntity = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(c => c.Title == address.AddressType);
            var countryEntity = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(c => c.Title == address.Country);
            var userEntity = await _context.Users.FirstOrDefaultAsync(c => c.Id == address.Id);

            if (userEntity == null)
            {
                throw new Exception();
            }
            else
            {
                var addressModel = new Address()
                {
                    AddressPrimary = address.AddressPrimary,
                    Address1 = address.Address1,
                    Address2 = address.Address2,
                    CountryId = countryEntity.LookUpCtgDetailId,
                    AddressTypeId = addressEntity.LookUpCtgDetailId,
                    City = address.City,
                    PostalCode = address.PostalCode,
                    State = address.State,
                    UserId = userEntity.Id,          
                };
                _context.Address.Add(addressModel);
                await _context.SaveChangesAsync();

                address.AddressId = addressModel.AddressId;
            }
        return address;
        }


        public async Task<AddressStudentDto> CreateStudentAddressAsync(AddressStudentDto addressStudent)
        {
            var addressEntity = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(c => c.Title == addressStudent.AddressType);
            var countryEntity = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(c => c.Title == addressStudent.Country);
            var studentEntity = await _context.Students.FirstOrDefaultAsync(c => c.StudentId == addressStudent.StudentId);

            if (studentEntity == null)
            {
                throw new Exception();
            }
            else
            {
                var addressModel = new StudentAddress()
                {
                    AddressPrimary = addressStudent.AddressPrimary,
                    Address1 = addressStudent.Address1,
                    Address2 = addressStudent.Address2,
                    CountryId = countryEntity.LookUpCtgDetailId,
                    AddressTypeId = addressEntity.LookUpCtgDetailId,
                    City = addressStudent.City,
                    PostalCode = addressStudent.PostalCode,
                    State = addressStudent.State,
                    StudentId = studentEntity.StudentId,
                };
                _context.StudentAddress.Add(addressModel);
                await _context.SaveChangesAsync();

                addressStudent.StudentAddressId = addressModel.StudentAddressId;
            }
            return addressStudent;
        }




        //public async Task<Address> UpdateAddressAsync(Address address)
        //{
        //    _context.Entry(address).State = EntityState.Modified;
        //    await _context.SaveChangesAsync();
        //    return address;
        //}

        //public async Task<bool> DeleteAddressAsync(int id)
        //{
        //    var address = await _context.Address.FindAsync(id);
        //    if (address == null)
        //    {
        //        return false;
        //    }

        //    _context.Address.Remove(address);
        //    await _context.SaveChangesAsync();
        //    return true;
        //}
    }
}
