using Microsoft.EntityFrameworkCore;
using User.Management.Data.Models;

namespace User.Management.Services
{
    public class TeacherService : ITeacherService
    {
        private readonly ApplicationDbContext _context;

        public TeacherService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Teacher>> GetAllTeachersAsync()
        {
            return await _context.Teachers.ToListAsync();
        }

        public async Task<Teacher> GetTeacherByIdAsync(string teacherId)
        {
            return await _context.Teachers.FindAsync(teacherId);
        }

        public async Task<Teacher> CreateTeacherAsync(Teacher teacher)
        {
            _context.Teachers.Add(teacher);

            await _context.SaveChangesAsync();
            return teacher;
        }

        public async Task UpdateTeacherAsync(Teacher teacher)
        {
            _context.Entry(teacher).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteTeacherAsync(string teacherId)
        {
            var teacher = await _context.Teachers.FindAsync(teacherId);
            if (teacher != null)
            {
                _context.Teachers.Remove(teacher);
                await _context.SaveChangesAsync();
            }
        }
    }
}
