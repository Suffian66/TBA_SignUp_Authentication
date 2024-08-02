using User.Management.Data.DTOs;
using User.Management.DTOs;

namespace User.Management.Service.Services
{
    public interface IStudentAttendance
    {
        Task<IEnumerable<GetStudentAttendanceDto>> GetAllAttendancesAsync(int? classId, DateTime? attendanceDate);
        Task<IEnumerable<LookupCategoryDetailDto>> GetAllClassesAsync();


        Task<AddStudentAttendanceDto> AddAttendanceAsync(AddStudentAttendanceDto attendanceDto);
        //Task<StudentAttendanceDto> UpdateAttendanceAsync(StudentAttendanceDto attendance);

    }
}
