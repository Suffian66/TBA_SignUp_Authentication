using User.Management.Data.DTOs;
using User.Management.Data.Models;

namespace User.Management.Services
{
    public interface ITeacherService
    {
        Task<IEnumerable<Teacher>> GetAllTeachersAsync();
        Task<TeacherDto> GetTeacherByIdAsync(int teacherId);
        Task<Teacher> CreateTeacherAsync(AddTeacherDto teacher);
        Task UpdateTeacherAsync(int teacherId, UpdateTeacherDto teacher);

    }
}
