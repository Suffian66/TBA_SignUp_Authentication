using User.Management.Data.Dto;
using User.Management.Data.Models;

namespace User.Management.Services
{
    public interface IAddressService
    {
        Task<IEnumerable<AddressDto>> GetAllAddressesAsync();

        Task<IEnumerable<AddressStudentDto>> GetAllStudentAddressesAsync();
        Task<Address> GetAddressByIdAsync(int id);
        Task<StudentAddress> GetStudentAddressByIdAsync(int id);

        Task<AddressDto> CreateAddressAsync(AddressDto address);
        Task<AddressStudentDto> CreateStudentAddressAsync(AddressStudentDto addressStudent);
        Task<Address> UpdateAddressAsync(Address address);
        Task<bool> DeleteAddressAsync(int id);
    }
}
