using Microsoft.EntityFrameworkCore;
using User.Management.Data.Dto;
using User.Management.Data.DTOs;
using User.Management.Data.Models;


namespace User.Management.Service.Services
{
    public class StudentService : IStudent
    {

        private readonly ApplicationDbContext _context;

        public StudentService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<StudentDto>> GetAllStudents()
        {
            var students = await _context.Students.ToListAsync();
            var users = await _context.Users.ToListAsync();
            var classes = await _context.Class.ToListAsync();

            var result = students.Select(student =>
            {
                var newUser = users.FirstOrDefault(user => user.Id == student.Id);
                var newClasses = classes.FirstOrDefault(newClass => newClass.ClassId == student.ClassId);

                if (newUser != null && newClasses != null)
                {
                    return new StudentDto

                    {
                        FirstName = student.Users.FirstName,
                        LastName = student.Users.LastName,
                        MiddleName = student.Users.MiddleName,
                        Gender = student.Users.Gender,
                        NamePrefix = student.Users.NamePrefix,
                        DOB = student.Users.DOB,
                        CNIC = student.Users.CNIC,
                        Occupation = student.Users.Occupation,
                        StudentId = student.StudentId,
                        GR_No = student.GR_No,
                        LastClassAttended = student.LastClassAttended,
                        DateOfSchoolLeaving = student.DateOfSchoolLeaving,
                        MedicalNeeds = student.MedicalNeeds,
                        ClassName = student.Class.ClassName
                    };
                }
                return null;
            }).Where(dto => dto != null).ToList();
            return result;
        }

        public StudentDto GetStudentById(int studentId)
        {
            var students = _context.Students.FirstOrDefault(x => x.StudentId == studentId);
            var users = _context.Users.FirstOrDefault(x => x.Id == students.Id);
            var classes = _context.Class.FirstOrDefault(x => x.ClassId == students.ClassId);
            var studentsFamily = _context.StudentFamily.Where(x => x.StudentId == studentId).ToList();

            if (students != null && classes != null && users != null)
            {
                var result = new StudentDto

                {
                    FirstName = users.FirstName,
                    LastName = users.LastName,
                    MiddleName = users.MiddleName,
                    Gender = users.Gender,
                    NamePrefix = users.NamePrefix,
                    DOB = users.DOB,
                    CNIC = users.CNIC,
                    Occupation = users.Occupation,
                    StudentId = students.StudentId,
                    GR_No = students.GR_No,
                    DateOfAdmission = students.DateOfAdmission,
                    LastClassAttended = students.LastClassAttended,
                    DateOfSchoolLeaving = students.DateOfSchoolLeaving,
                    MedicalNeeds = students.MedicalNeeds,
                    ClassName = classes.ClassName,
                    StudentFamilies = studentsFamily
                };
                return result;
            }
            return null;
        }

        public async Task<AddStudentDto> CreateStudentAsync(AddStudentDto dto)
        {
            // Create a new student entity (assuming you save it in the database)
            var newStudent = new Student
            {
                GR_No = dto.GR_No,
                DateOfAdmission = dto.DateOfAdmission,
                LastClassAttended = dto.LastClassAttended,
                DateOfSchoolLeaving = dto.DateOfSchoolLeaving,
                MedicalNeeds = dto.MedicalNeeds,
                ClassId = _context.Class.FirstOrDefault(c => c.ClassName == dto.ClassName)?.ClassId ?? 0, // Resolve ClassId from ClassName
            };

            _context.Students.Add(newStudent);
            await _context.SaveChangesAsync();

            // For simplicity, assuming you have logic to save student family details here
            foreach (var familyDto in dto.StudentFamily)
            {
                var studentFamily = new StudentFamily
                {
                    FamilyMemberName = familyDto.FamilyMemberName,
                    FamilyRelation = familyDto.FamilyRelation,
                    PersonOccupation = familyDto.PersonOccupation,
                    PersonIncome = familyDto.PersonIncome,
                    StudentId = newStudent.StudentId // Assign the newly created student's Id
                };

                _context.StudentFamily.Add(studentFamily);
            }

            await _context.SaveChangesAsync();

            // Prepare the response DTO with necessary fields
            var resultDto = new AddStudentDto
            {
                GR_No = newStudent.GR_No,
                DateOfAdmission = newStudent.DateOfAdmission,
                LastClassAttended = newStudent.LastClassAttended,
                DateOfSchoolLeaving = newStudent.DateOfSchoolLeaving,
                MedicalNeeds = newStudent.MedicalNeeds,
                ClassName = dto.ClassName, // Use the input DTO's ClassName directly
                StudentFamily = dto.StudentFamily // Use the input DTO's StudentFamily directly
            };

            return resultDto;
        }

        Task<Student> IStudent.CreateStudentAsync(AddStudentDto dto)
        {
            throw new NotImplementedException();
        }
    }
}
