using Microsoft.AspNetCore.Mvc;
using User.Management.Data.Dtos;
using User.Management.Services;

namespace User.Management.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MapClassSubjectTeachersController : ControllerBase
    {
        private readonly IMapClassSubjectTeacherService _service;

        public MapClassSubjectTeachersController(IMapClassSubjectTeacherService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<ActionResult<MapClassSubjectTeacherDto>> CreateMapClassSubjectTeacher(MapClassSubjectTeacherDto dto)
        {
            var createdDto = await _service.CreateMapClassSubjectTeacherAsync(dto);
            return CreatedAtAction(nameof(GetMapClassSubjectTeacher), new { id = createdDto.MapClassSubjectTeacherId }, createdDto);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MapClassSubjectTeacherDto>> GetMapClassSubjectTeacher(int id)
        {
            var dto = await _service.GetMapClassSubjectTeacherByIdAsync(id);
            if (dto == null) return NotFound();
            return Ok(dto);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MapClassSubjectTeacherDto>>> GetAllMapClassSubjectTeachers()
        {
            try
            {
                var dtos = await _service.GetAllMapClassSubjectTeachersAsync();
                return Ok(dtos);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMapClassSubjectTeacher(int id, MapClassSubjectTeacherDto dto)
        {
            var updatedDto = await _service.UpdateMapClassSubjectTeacherAsync(id, dto);
            if (updatedDto == null) return NotFound();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMapClassSubjectTeacher(int id)
        {
            var deleted = await _service.DeleteMapClassSubjectTeacherAsync(id);
            if (!deleted) return NotFound();
            return NoContent();
        }
    }
}
