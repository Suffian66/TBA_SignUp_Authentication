using Microsoft.EntityFrameworkCore;
using User.Management.Data.Models;

namespace User.Management.Service.Services
{
    public class LookUpCategoryDetailService : ILookUpCategoryDetailService
    {
        private readonly ApplicationDbContext _context;

        public LookUpCategoryDetailService(ApplicationDbContext context)
        {
            _context = context;
        }



        public async Task<IEnumerable<LookUpCategoryDetail>> GetAllCategoryDetailAsync()
        {
            try
            {
                return await _context.LookupsCategoryDetail
                    .ToListAsync();
            }
            catch (Exception ex)
            {
                throw new ApplicationException("An error occurred while fetching category details.", ex);
            }
        }

        public async Task<IEnumerable<LookUpCategoryDetail>> GetFilteredCategoryDetailAsync(IEnumerable<string> filters)
        {
            // Start with all categories
            IQueryable<LookUpCategoryDetail> query = _context.LookupsCategoryDetail.Include(c => c.LookUpCategory);

            // Apply filters if any
            if (filters != null && filters.Any())
            {
                foreach (var filter in filters)
                {
                    // Example: If you have a property 'Name' in LookUpCategoryDetail and you want to filter by it
                    query = query.Where(category => category.LookUpCategory.Title.ToLower().Trim().Contains(filter.ToLower().Trim()));
                }
            }

            // Execute query asynchronously and return the result
            return await query.ToListAsync();
        }


        public async Task<IEnumerable<LookUpCategoryDetail>> GetLookUpCategoryDetails()
        {
            try
            {
                return await _context.LookupsCategoryDetail.ToListAsync();
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"An error occurred while fetching category details for category ID.", ex);
            }
        }
    }
}
