using Microsoft.EntityFrameworkCore;
using User.Management.Data.DTOs;
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
            return await _context.Teachers.Include(t => t.User).ToListAsync();
        }

        public async Task<TeacherDto?> GetTeacherByIdAsync(int teacherId)
        {
            var teacherDetails = _context.Teachers.FirstOrDefault(x => x.TeacherId == teacherId);


            if (teacherDetails != null)
            {
                var users = _context.Users.FirstOrDefault(x => x.Id == teacherDetails.UserId);

                var result = new TeacherDto
                {
                    Id = users.Id,
                    FirstName = users.FirstName,
                    LastName = users.LastName,
                    MiddleName = users.MiddleName,
                    Gender = users.Gender,
                    NamePrefix = users.NamePrefix,
                    DOB = users.DOB,
                    CNIC = users.CNIC,
                    Occupation = users.Occupation,
                    Father_HusbandName = teacherDetails.Father_HusbandName,
                    DegreeQualification = teacherDetails.DegreeQualification,
                    Certification = teacherDetails.Certification,
                    Salary = teacherDetails.Salary,
                };
                return result;
            }

            return null;
        }
        public async Task<Teacher> CreateTeacherAsync(AddTeacherDto teacher)
        {
            var teacherModel = new Teacher()
            {
                Father_HusbandName = teacher.Father_HusbandName,
                DegreeQualification = teacher.DegreeQualification,
                Certification = teacher.Certification,
                Salary = teacher.Salary,
                UserId = teacher.userId,
            };

            var createdTeacher = _context.Teachers.Add(teacherModel);
            await _context.SaveChangesAsync();
            return createdTeacher.Entity;
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
