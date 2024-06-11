using User.Management.Data.Models;

namespace User.Management.Service.Services
{
    public interface ILookUpCategoryService
    {
        Task<IEnumerable<LookUpCategory>> GetAllLookUpCategoryAsync();
        Task<LookUpCategory> GetLookUpCategoryByIdAsync(int id);
    }
}
