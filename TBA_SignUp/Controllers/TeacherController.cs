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
        public async Task<ActionResult<TeacherDto>> GetTeacherById(string teacherId)
        {
            try
            {
                var teacher = _teacherService.GetTeacherByIdAsync(teacherId);
                if (teacher == null)
                {
                    return NotFound();
                }
                return Ok(teacher);
            }
            catch (Exception)
            {
                // Log the exception details (ex) here for debugging purposes
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost]
        public async Task<ActionResult<Teacher>> CreateTeacher(Teacher teacher)
        {
            try
            {
                var createdTeacher = await _teacherService.CreateTeacherAsync(teacher);
                return CreatedAtAction(nameof(GetTeacherList), new { id = createdTeacher.TeacherId }, createdTeacher);

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message, ex);

            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTeacher(string id, Teacher teacher)
        {
            if (id != teacher.TeacherId)
            {
                return BadRequest("Teacher ID mismatch");
            }

            await _teacherService.UpdateTeacherAsync(teacher);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeacher(string id)
        {
            await _teacherService.DeleteTeacherAsync(id);
            return NoContent();
        }
    }
}
