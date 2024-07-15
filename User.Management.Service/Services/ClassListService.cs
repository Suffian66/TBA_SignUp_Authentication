using Microsoft.EntityFrameworkCore;
using User.Management.Data.DTOs;
using User.Management.Data.Models;

namespace User.Management.Service.Services
{
    public class ClassListService : IClassListService
    {
        private readonly ApplicationDbContext _context;

        public ClassListService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<GetClassListDto>> GetClassListAsync()
        {
            var classList = await _context.LookupsCategoryDetail
                .Where(lcd => _context.Students.Any(s => s.ClassId == lcd.LookUpCtgDetailId))
                .Select(lcd => new GetClassListDto
                {
                    Class = lcd.Title,
                    StudentCount = _context.Students.Count(s => s.ClassId == lcd.LookUpCtgDetailId)
                }).ToListAsync();

            return classList;
        }



        public async Task<List<StudentListDto>> GetStudentsByClassNameAsync(string className)
        {
            var students = await _context.Students
                .Where(s => s.ClassDetail.Title == className)
                .Select(s => new StudentListDto
                {
                    StudentId = s.StudentId,
                    GR_No = s.GR_No,
                    FirstName = s.FirstName,
                    LastName = s.LastName,
                    Class = s.ClassDetail.Title,
                }).ToListAsync();

            return students;
        }
    }


}
