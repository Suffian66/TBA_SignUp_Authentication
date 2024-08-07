using User.Management.Data.DTOs;

namespace User.Management.Service.Services
{
    public interface ITeacherAttendance
    {
        Task<IEnumerable<GetTeacherAttendanceDto>> GetAllAttendancesAsync(DateTime? attendanceDate);

        Task<AddTeacherAttendanceDto> AddAttendanceAsync(AddTeacherAttendanceDto attendanceDto);


    }
}
