using Microsoft.EntityFrameworkCore;
using User.Management.Data.Dto;
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

        //public void AddStudent(StudentDto student)
        //{
        //    //var newStudent = new StudentDto
        //    //{
        //    //    GR_No = student.GR_No,
        //    //    StudentName = student.StudentName,
        //    //    FatherName = student.FatherName,
        //    //    LastClassAttended = student.LastClassAttended,
        //    //    DateOfSchoolLeaving = student.DateOfSchoolLeaving,
        //    //    MedicalNeeds = student.MedicalNeeds,
        //    //    FatherOccupation = student.FatherOccupation,
        //    //    FatherIncome = student.FatherIncome,
        //    //    NameOfDependent = student.NameOfDependent,
        //    //    ClassId = student.ClassId,
        //    //    ClassName = student.ClassName,
        //    //};

        //    // Add the student to the context
        //    //_context.Students.Add(newStudent);
        //    //_context.SaveChanges();
        //}

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

    }
}
