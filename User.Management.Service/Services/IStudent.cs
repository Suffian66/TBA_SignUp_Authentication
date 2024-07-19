
using User.Management.Data.Dto;
using User.Management.Data.DTOs;

namespace User.Management.Service.Services
{
    public interface IStudent
    {
        Task<IEnumerable<StudentDto>> GetAllStudents();
        StudentDto GetStudentById(int studentId);
        public Task<int> CreateStudentAsync(AddStudentDto dto);

        Task<bool> UpdateStudentAsync(int studentId, UpdateStudentDto dto);


    }
}
