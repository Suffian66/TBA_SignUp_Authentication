using Microsoft.EntityFrameworkCore;
using User.Management.Data.Models;

namespace User.Management.Service.Services
{
    public class LookUpCategoryService : ILookUpCategoryService
    {
        private readonly ApplicationDbContext _context;

        public LookUpCategoryService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<LookUpCategory>> GetAllLookUpCategoryAsync()
        {
            try
            {
                return await _context.LookupsCategory.ToListAsync();
            }
            catch (Exception ex)
            {
                // Handle exception (log it, rethrow it, etc.)
                throw new ApplicationException("An error occurred while fetching categories.", ex);
            }
        }
    }
}
