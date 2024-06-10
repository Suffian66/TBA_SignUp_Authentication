using Microsoft.EntityFrameworkCore;
using User.Management.Data.Models;

namespace User.Management.Service.Services
{
    public class LookUpCountryService : ILookUpCountryService
    {
        private readonly ApplicationDbContext _context;

        public LookUpCountryService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<LookUpCountry>> GetAllAsync()
        {
            try
            {
                return await _context.LookupsCountry.ToListAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
