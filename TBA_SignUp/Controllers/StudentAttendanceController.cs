//using Microsoft.AspNetCore.Mvc;
//using User.Management.Data.DTOs;
//using User.Management.Service.Services;

//namespace User.Management.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class StudentAttendanceController : ControllerBase
//    {
//        private readonly IStudentAttendance _studentAttendanceService;

//        public StudentAttendanceController(IStudentAttendance studentAttendanceService)
//        {
//            _studentAttendanceService = studentAttendanceService;
//        }

//        [HttpGet("[action]")]
//        public async Task<ActionResult<IEnumerable<StudentAttendanceDto>>> GetAllAttendances(int classId, DateTime attendanceDate)
//        {
//            try
//            {
//                var attendances = await _studentAttendanceService.GetAllAttendancesAsync(classId, attendanceDate);
//                return Ok(attendances);
//            }
//            catch (Exception)
//            {

//                throw;
//            }

//        }

//        //[HttpGet("[action]")]
//        //public async Task<ActionResult<StudentAttendanceDto>> GetAttendanceById(int id)
//        //{
//        //    try
//        //    {
//        //        var attendance = await _studentAttendanceService.GetAttendanceByIdAsync(id);
//        //        if (attendance == null) return NotFound();

//        //        return Ok(attendance);
//        //    }
//        //    catch (Exception)
//        //    {

//        //        throw;
//        //    }

//        //}

//        //[HttpPost("[action]")]
//        //public async Task<IActionResult> AddAttendance([FromBody] StudentAttendanceDto attendanceDto)
//        //{
//        //    if (attendanceDto == null)
//        //    {
//        //        return BadRequest("The attendanceDto field is required.");
//        //    }

//        //    try
//        //    {
//        //        var result = await _studentAttendanceService.AddAttendanceAsync(attendanceDto);
//        //        return Ok(result);
//        //    }
//        //    catch (Exception ex)
//        //    {
//        //        return StatusCode(500, ex.Message); // Internal Server Error
//        //    }
//        //}


//        //[HttpPut("[action]")]
//        //public async Task<IActionResult> UpdateAttendance(int id, StudentAttendanceDto attendanceDto)
//        //{
//        //    try
//        //    {
//        //        if (id != attendanceDto.StudentAttendanceId) return BadRequest();

//        //        var updatedAttendance = await _studentAttendanceService.UpdateAttendanceAsync(attendanceDto);
//        //        if (updatedAttendance == null) return NotFound();

//        //        return NoContent();
//        //    }
//        //    catch (Exception)
//        //    {

//        //        throw;
//        //    }

//        //}
//    }
//}
