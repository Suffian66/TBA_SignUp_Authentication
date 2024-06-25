using User.Management.Data.Dto;
using User.Management.Data.Models;

namespace User.Management.Services
{
    public interface IAddressService
    {
        Task<IEnumerable<Address>> GetAllAddressesAsync();
        Task<Address> GetAddressByIdAsync(int id);
        Task<AddressDto> CreateAddressAsync(AddressDto address);
        Task<Address> UpdateAddressAsync(Address address);
        Task<bool> DeleteAddressAsync(int id);
    }
}
