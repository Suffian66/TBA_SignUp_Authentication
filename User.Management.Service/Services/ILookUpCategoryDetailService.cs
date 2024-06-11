using User.Management.Data.Models;

namespace User.Management.Service.Services
{
    public interface ILookUpCategoryDetailService
    {

        Task<IEnumerable<LookUpCategoryDetail>> GetFilteredCategoryDetailAsync(IEnumerable<string> filters);
        Task<IEnumerable<LookUpCategoryDetail>> GetAllCategoryDetailAsync();
        Task<IEnumerable<LookUpCategoryDetail>> GetLookUpCategoryDetailsByCategoryIdAsync(int categoryId);

    }
}
