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

                throw new ApplicationException("An error occurred while fetching categories.", ex);
            }
        }

        public async Task<LookUpCategory> GetLookUpCategoryByIdAsync(int id)
        {
            try
            {
                var category = await _context.LookupsCategory.FindAsync(id);
                if (category == null)
                {
                    throw new KeyNotFoundException($"Category with ID {id} not found.");
                }
                return category;
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"An error occurred while fetching the category with ID {id}.", ex);
            }
        }
    }
}

