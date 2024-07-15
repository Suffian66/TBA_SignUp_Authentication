using Microsoft.AspNetCore.Mvc;
using User.Management.Data.DTOs;
using User.Management.Data.Models;
using User.Management.Services;

namespace User.Management.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly ITeacherService _teacherService;

        public TeacherController(ITeacherService teacherService)
        {
            _teacherService = teacherService;
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<IEnumerable<Teacher>>> GetTeacherList()
        {
            var teachers = await _teacherService.GetAllTeachersAsync();
            return Ok(teachers);
        }
        [HttpGet("[action]")]
        public async Task<ActionResult<TeacherDto>> GetTeacherById(int teacherId)
        {
            try
            {
                var teacher = await _teacherService.GetTeacherByIdAsync(teacherId);
                if (teacher == null)
                {
                    return NotFound();
                }
                return Ok(teacher);
            }
            catch (Exception ex)
            {
                // Log the exception details (ex) here for debugging purposes
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost]
        public async Task<ActionResult<AddTeacherDto>> CreateTeacher([FromBody] AddTeacherDto teacher)
        {
            try
            {
                if (string.IsNullOrEmpty(teacher.userId))
                {
                    return BadRequest(new { message = "UserId is required" });
                }

                var createdTeacher = await _teacherService.CreateTeacherAsync(teacher);
                return CreatedAtAction(nameof(GetTeacherList), new { id = createdTeacher.TeacherId }, createdTeacher);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
        [HttpPut("[action]")]
        public async Task<IActionResult> UpdateTeacher(int teacherId, [FromBody] UpdateTeacherDto teacher)
        {
            try
            {
                if (teacher != null)
                {
                    await _teacherService.UpdateTeacherAsync(teacherId, teacher);
                    return NoContent();
                }
                return BadRequest(new { message = "Error Occur" });
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }


    }
}
