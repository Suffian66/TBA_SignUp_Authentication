
using User.Management.Data.Dto;
using User.Management.Data.Models;

namespace User.Management.Service.Services
{
    public interface IStudent
    {
        Task <IEnumerable<StudentDto>> GetAllStudents();
        StudentDto GetStudentById(int studentId);
        //void AddStudent(StudentDto student);
    }
}
