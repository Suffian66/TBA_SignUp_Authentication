using Microsoft.EntityFrameworkCore;
using User.Management.Data.Models;

namespace User.Management.Services
{
    public class MapTeacherSubjectService : IMapTeacherSubjectService
    {
        private readonly ApplicationDbContext _context;

        public MapTeacherSubjectService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<MapTeacherSubject>> GetAllMappingsAsync()
        {
            return await _context.MapTeacherSubject
                .Include(m => m.Users)
                .Include(m => m.Class)
                .Include(m => m.Subject)
                .ToListAsync();
        }

        public async Task<MapTeacherSubject> GetMappingByIdAsync(int mapTeacherSubjectId)
        {
            return await _context.MapTeacherSubject
                .Include(m => m.Users)
                .Include(m => m.Class)
                .Include(m => m.Subject)
                .FirstOrDefaultAsync(m => m.MapTeacherSubjectId == mapTeacherSubjectId);
        }

        public async Task<MapTeacherSubject> CreateMappingAsync(MapTeacherSubject mapTeacherSubject)
        {
            _context.MapTeacherSubject.Add(mapTeacherSubject);
            await _context.SaveChangesAsync();
            return mapTeacherSubject;
        }

        public async Task UpdateMappingAsync(MapTeacherSubject mapTeacherSubject)
        {
            _context.Entry(mapTeacherSubject).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteMappingAsync(int mapTeacherSubjectId)
        {
            var mapping = await _context.MapTeacherSubject.FindAsync(mapTeacherSubjectId);
            if (mapping != null)
            {
                _context.MapTeacherSubject.Remove(mapping);
                await _context.SaveChangesAsync();
            }
        }
    }
}
