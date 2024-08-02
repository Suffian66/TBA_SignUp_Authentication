using Microsoft.AspNetCore.Mvc;
using User.Management.Data.DTOs;
using User.Management.DTOs;
using User.Management.Service.Services;

namespace User.Management.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentAttendanceController : ControllerBase
    {
        private readonly IStudentAttendance _studentAttendanceService;

        public StudentAttendanceController(IStudentAttendance studentAttendanceService)
        {
            _studentAttendanceService = studentAttendanceService;
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<IEnumerable<UpdateStudentAttendanceDto>>> GetAllAttendances(int? classId, DateTime? attendanceDate)
        {
            try
            {
                var attendances = await _studentAttendanceService.GetAllAttendancesAsync(classId, attendanceDate);
                return Ok(attendances);
            }
            catch (Exception)
            {

                throw;
            }

        }

        [HttpGet("[action]")]

        public async Task<IEnumerable<LookupCategoryDetailDto>> GetAllClassesAsync()
        {
            try
            {
                var classEntities = await _studentAttendanceService.GetAllClassesAsync();
                return classEntities;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AddAttendance([FromBody] List<AddStudentAttendanceDto> attendanceDto)
        {
            if (attendanceDto == null || !attendanceDto.Any())
            {
                return BadRequest("The attendanceDtoList field is required and cannot be empty.");
            }

            try
            {
                var results = new List<AddStudentAttendanceDto>(); // Use the actual return type of AddAttendanceAsync

                foreach (var attendance in attendanceDto)
                {
                    // Perform operations on each attendanceDto
                    var result = await _studentAttendanceService.AddAttendanceAsync(attendance);
                    results.Add(result); // Collect each result
                }

                return Ok(results);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message); // Internal Server Error
            }
        }


        //[HttpPut("[action]")]
        //public async Task<IActionResult> UpdateAttendance(int id, StudentAttendanceDto attendanceDto)
        //{
        //    try
        //    {
        //        if (id != attendanceDto.StudentAttendanceId) return BadRequest();

        //        var updatedAttendance = await _studentAttendanceService.UpdateAttendanceAsync(attendanceDto);
        //        if (updatedAttendance == null) return NotFound();

        //        return NoContent();
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }

        //}
    }
}
