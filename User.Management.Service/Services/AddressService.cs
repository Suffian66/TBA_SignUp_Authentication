using Microsoft.EntityFrameworkCore;
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

        public async Task<IEnumerable<Address>> GetAllAddressesAsync()
        {
            return await _context.Address.ToListAsync();
        }

        public async Task<Address> GetAddressByIdAsync(int id)
        {
            return await _context.Address.FindAsync(id);
        }

        public async Task<AddressDto> CreateAddressAsync(AddressDto address)
        {

            var user = await _context.Users

                .FindAsync(address.Id);
            if (user == null)
            {
                throw new ArgumentException($"User with Id '{address.Id}' does not exist.");
            }

            var addressModel = new Address()
            {
                AddressType = address.AddressType.Title,
                AddressPrimary = address.AddressPrimary,
                Address1 = address.Address1,
                Address2 = address.Address2,
                Country = address.Country.Title,
                City = address.City,
                PostalCode = address.PostalCode,
                State = address.State,
                UserId = address.Id,
            };

            _context.Address.Add(addressModel);
            await _context.SaveChangesAsync();
            address.AddressId = addressModel.AddressId;
            return address;
        }

        public async Task<Address> UpdateAddressAsync(Address address)
        {
            _context.Entry(address).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return address;
        }

        public async Task<bool> DeleteAddressAsync(int id)
        {
            var address = await _context.Address.FindAsync(id);
            if (address == null)
            {
                return false;
            }

            _context.Address.Remove(address);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
