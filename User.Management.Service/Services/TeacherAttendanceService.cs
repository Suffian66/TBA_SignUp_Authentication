using Microsoft.EntityFrameworkCore;
using User.Management.Data.DTOs;
using User.Management.Data.Models;
using User.Management.Service.Services;

namespace User.Management.Services
{
    public class TeacherAttendanceService : ITeacherAttendance
    {
        private readonly ApplicationDbContext _context;

        public TeacherAttendanceService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<GetTeacherAttendanceDto>> GetAllAttendancesAsync(DateTime? attendanceDate)
        {
            try
            {
                var query = _context.TeacherAttendance.AsQueryable();


                if (attendanceDate.HasValue)
                {
                    query = query.Where(ta => ta.AttendanceDate == attendanceDate);
                }

                var attendances = await query
                    .Select(ta => new GetTeacherAttendanceDto
                    {
                        TeacherAttendanceId = ta.TeacherAttendanceId,
                        Present = ta.Present,
                        Absent = ta.Absent,
                        Leave = ta.Leave,
                        AttendanceDate = ta.AttendanceDate,
                        Remarks = ta.Remarks,
                        UserId = ta.User.Id,
                        FirstName = ta.User.FirstName,
                        LastName = ta.User.LastName,
                    })
                    .ToListAsync();

                return attendances;
            }
            catch (Exception ex)
            {
                throw new Exception("Error: Could not retrieve data.", ex);
            }
        }

        public async Task<AddTeacherAttendanceDto> AddAttendanceAsync(AddTeacherAttendanceDto attendanceDto)
        {
            if (attendanceDto == null)
            {
                throw new ArgumentNullException(nameof(attendanceDto), "The attendanceDto field is required.");
            }

            try
            {
                var teacherExists = await _context.Users.AnyAsync(u => u.Id == attendanceDto.UserId);

                if (!teacherExists)
                {
                    throw new InvalidOperationException("Teacher does not exist.");
                }

                var existingAttendance = await _context.TeacherAttendance
                    .AnyAsync(a => a.UserId == attendanceDto.UserId && a.AttendanceDate == attendanceDto.AttendanceDate);

                if (existingAttendance)
                {
                    throw new InvalidOperationException("Attendance for the teacher already exists.");
                }

                var attendance = new TeacherAttendance
                {
                    Present = attendanceDto.Present,
                    Absent = attendanceDto.Absent,
                    Leave = attendanceDto.Leave,
                    AttendanceDate = attendanceDto.AttendanceDate,
                    Remarks = attendanceDto.Remarks,
                    UserId = attendanceDto.UserId
                };

                _context.TeacherAttendance.Add(attendance);
                await _context.SaveChangesAsync();

                attendanceDto.TeacherAttendanceId = attendance.TeacherAttendanceId;
                return attendanceDto;
            }
            catch (Exception ex)
            {
                throw new Exception("Error: Could not add attendance.", ex);
            }
        }
    }
}
