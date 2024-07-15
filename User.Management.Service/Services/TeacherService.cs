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




        public async Task UpdateTeacherAsync(int teacherId, UpdateTeacherDto teacher)
        {
            var existingTeacher = _context.Teachers.FirstOrDefault(x => x.TeacherId == teacherId);
            if (existingTeacher == null)
            {
                throw new KeyNotFoundException("Teacher not found");
            }

            // Update Teacher details
            existingTeacher.Father_HusbandName = teacher.Father_HusbandName;
            existingTeacher.DegreeQualification = teacher.DegreeQualification;
            existingTeacher.Certification = teacher.Certification;
            existingTeacher.Salary = teacher.Salary;

            // Update User details if necessary
            var user = await _context.Users.FindAsync(existingTeacher.UserId);
            if (user != null)
            {
                user.FirstName = teacher.FirstName;
                user.MiddleName = teacher.MiddleName;
                user.LastName = teacher.LastName;
                user.Gender = teacher.Gender;
                user.NamePrefix = teacher.NamePrefix;
                user.DOB = teacher.DOB;
                user.CNIC = teacher.CNIC;
                user.Occupation = teacher.Occupation;

                // Explicitly mark the user entity as modified
                _context.Users.Update(user);

                // Log the state of the user entity
                var userState = _context.Entry(user).State;
                Console.WriteLine($"User {user.Id} state: {userState}");

                // Log user changes
                Console.WriteLine($"User {user.Id} updated: {user.FirstName}, {user.LastName}");
            }
            else
            {
                throw new KeyNotFoundException("User not found");
            }

            await _context.SaveChangesAsync();
        }

    }
}
