
using User.Management.Data.Dto;
using User.Management.Data.DTOs;
using User.Management.Data.Models;

namespace User.Management.Service.Services
{
    public interface IStudent
    {
        Task <IEnumerable<StudentDto>> GetAllStudents();
        StudentDto GetStudentById(int studentId);
        Task<Student> CreateStudentAsync(AddStudentDto dto);
    }
}
