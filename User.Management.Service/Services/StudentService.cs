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

        public async Task<IEnumerable<StudentDto?>> GetAllStudents()
        {
            var students = await _context.Students.ToListAsync();
            var classes = await _context.Class.ToListAsync();

            var result = from student in students
                         join classItem in classes on student.ClassId equals classItem.ClassId
                         select new StudentDto
                         {
                             GR_No = student.GR_No,
                             StudentName = student.StudentName,
                             FatherName = student.FatherName,
                             LastClassAttended = student.LastClassAttended,
                             DateOfSchoolLeaving = student.DateOfSchoolLeaving,
                             MedicalNeeds = student.MedicalNeeds,
                             FatherOccupation = student.FatherOccupation,
                             FatherIncome = student.FatherIncome,
                             NameOfDependent = student.NameOfDependent,
                             ClassId = student.ClassId,
                             ClassName = classItem.ClassName
                         };

            return result.ToList();
        }

        //public StudentDto GetStudentById(int studentId)
        //{
        //    throw new NotImplementedException();
        //}


    }
}
