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

        public async Task<IEnumerable<LookUpCategoryDetail>> GetAllLookUpCategoryDetailAsync()
        {
            try
            {
                return await _context.LookupsCategoryDetail.ToListAsync();
            }
            catch (Exception ex)
            {

                throw new ApplicationException("An error occurred while fetching categories.", ex);
            }
        }
    }
}
