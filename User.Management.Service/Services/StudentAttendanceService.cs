using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using User.Management.Data.DTOs;
using User.Management.Data.Models;
using User.Management.DTOs;
using User.Management.Service.Services;

namespace User.Management.Services
{
    public class StudentAttendanceService : IStudentAttendance
    {
        private readonly ApplicationDbContext _context;

        public StudentAttendanceService(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<GetStudentAttendanceDto>> GetAllAttendancesAsync(int? classId, DateTime? attendanceDate)
        {
            try
            {
                // Start with the StudentAttendance table
                var query = _context.StudentAttendance.AsQueryable();

                // Filter by classId if provided
                if (classId.HasValue)
                {
                    query = query.Where(sa => sa.ClassId == classId.Value);
                }

                // Filter by attendanceDate if provided
                if (attendanceDate.HasValue)
                {
                    query = query.Where(sa => sa.AttendanceDate == attendanceDate.Value.Date);
                }

                // Join with LookupsCategoryDetail to get class title if classId is provided
                var attendances = await query
                    .Select(sa => new GetStudentAttendanceDto
                    {
                        StudentAttendanceId = sa.StudentAttendanceId,
                        Present = sa.Present,
                        Absent = sa.Absent,
                        Leave = sa.Leave,
                        AttendanceDate = sa.AttendanceDate,
                        Remarks = sa.Remarks,
                        StudentId = sa.StudentId,
                        FirstName = sa.Students.FirstName,
                        LastName = sa.Students.LastName,
                        Gr_No = sa.Students.GR_No,
                        Title = classId.HasValue
                            ? _context.LookupsCategoryDetail
                                .Where(c => c.LookUpCtgDetailId == sa.ClassId)
                                .Select(c => c.Title)
                                .FirstOrDefault()
                            : null
                    })
                    .ToListAsync();

                return attendances;
            }
            catch (Exception ex)
            {
                throw new Exception("Error: Could not retrieve data.", ex);
            }
        }

        public async Task<IEnumerable<LookupCategoryDetailDto>> GetAllClassesAsync()
        {
            try
            {
                // Retrieve class details from the database
                var classEntities = await _context.LookupsCategoryDetail.Where(classEntities => classEntities.Description == "Class").ToListAsync();

                // Check if classEntities is null or empty
                if (classEntities == null || !classEntities.Any())
                {
                    return Enumerable.Empty<LookupCategoryDetailDto>();
                }

                // Map entities to DTOs
                var classDtos = classEntities.Select(classEntity => new LookupCategoryDetailDto
                {
                    // Assuming LookupCategoryDetailDto has these properties
                    LookUpCtgDetailId = classEntity.LookUpCtgDetailId,
                    Title = classEntity.Title,
                    Description = classEntity.Description,
                }).ToList();

                return classDtos;
            }
            catch (Exception ex)
            {
                // Handle the exception as needed
                throw new Exception("An error occurred while retrieving class data.", ex);
            }
        }







        public async Task<AddStudentAttendanceDto> AddAttendanceAsync(AddStudentAttendanceDto attendanceDto)
        {
            if (attendanceDto == null)
            {
                throw new ArgumentNullException(nameof(attendanceDto), "The attendanceDto field is required.");
            }

            try
            {
                // Validate ClassId and StudentId
                var classAttendance = _context.LookupsCategoryDetail.FirstOrDefault(c => c.LookUpCtgDetailId == attendanceDto.ClassId);
                //var classExists = await _context.LookupsCategoryDetail.AnyAsync(c => c.LookUpCtgDetailId == attendanceDto.ClassId);
                var studentExists = await _context.Students.AnyAsync(st => st.StudentId == attendanceDto.StudentId);


                var attendance = new StudentAttendance
                {
                    Present = attendanceDto.Present,
                    Absent = attendanceDto.Absent,
                    Leave = attendanceDto.Leave,
                    AttendanceDate = attendanceDto.AttendanceDate,
                    Remarks = attendanceDto.Remarks,
                    ClassId = attendanceDto.ClassId,
                    StudentId = attendanceDto.StudentId,
                };

                _context.StudentAttendance.Add(attendance);
                await _context.SaveChangesAsync();

                attendanceDto.StudentAttendanceId = attendance.StudentAttendanceId;
                return attendanceDto;
            }
            catch (DbUpdateException dbEx) when (dbEx.InnerException is SqlException sqlEx && sqlEx.Number == 547) // Foreign key violation
            {
                throw new Exception("Foreign key constraint violation: Ensure that ClassId and StudentId are valid.", sqlEx);
            }
            catch (Exception ex)
            {
                // Log exception (ex)
                throw new Exception("An error occurred while adding attendance.", ex);
            }
        }

        //public async Task<StudentAttendanceDto> UpdateAttendanceAsync(StudentAttendanceDto attendanceDto)
        //{
        //    try
        //    {
        //        var attendance = await _context.StudentAttendance.FindAsync(attendanceDto.StudentAttendanceId);
        //        if (attendance == null)
        //            return null;

        //        attendance.Present = attendanceDto.Present;
        //        attendance.Absent = attendanceDto.Absent;
        //        attendance.Leave = attendanceDto.Leave;
        //        attendance.AttendanceDate = attendanceDto.AttendanceDate;
        //        attendance.Remarks = attendanceDto.Remarks;
        //        attendance.ClassId = attendanceDto.ClassId;
        //        attendance.StudentId = attendanceDto.StudentId;

        //        _context.StudentAttendance.Update(attendance);
        //        await _context.SaveChangesAsync();

        //        return attendanceDto;
        //    }
        //    catch (Exception ex)
        //    {
        //        // Log exception (ex)
        //        throw new Exception($"An error occurred while updating attendance with ID {attendanceDto.StudentAttendanceId}.", ex);
        //    }
        //}
    }
}
