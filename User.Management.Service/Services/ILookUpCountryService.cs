using User.Management.Data.Models;

namespace User.Management.Service.Services
{
    public interface ILookUpCountryService
    {
        Task<IEnumerable<LookUpCountry>> GetAllAsync();

        //Task<IEnumerable<LookUpCountry>> GetCountry();
    }
}
