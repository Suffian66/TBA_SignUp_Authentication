using User.Management.Data.Models;

namespace User.Management.Service.Services
{
    public interface ILookUpCategoryDetailService
    {

        Task<IEnumerable<LookUpCategoryDetail>> GetAllLookUpCategoryDetailAsync();

    }
}
