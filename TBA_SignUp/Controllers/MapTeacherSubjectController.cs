using Microsoft.AspNetCore.Mvc;
using User.Management.Data.Models;
using User.Management.Services;

namespace User.Management.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MapTeacherSubjectController : ControllerBase
    {
        private readonly IMapTeacherSubjectService _mapTeacherSubjectService;

        public MapTeacherSubjectController(IMapTeacherSubjectService mapTeacherSubjectService)
        {
            _mapTeacherSubjectService = mapTeacherSubjectService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MapTeacherSubject>>> GetMappings()
        {
            try
            {
                var mappings = await _mapTeacherSubjectService.GetAllMappingsAsync();
                return Ok(mappings);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MapTeacherSubject>> GetMapping(int id)
        {
            try
            {
                var mapping = await _mapTeacherSubjectService.GetMappingByIdAsync(id);
                if (mapping == null)
                {
                    return NotFound();
                }
                return Ok(mapping);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost]
        public async Task<ActionResult<MapTeacherSubject>> CreateMapping(MapTeacherSubject mapTeacherSubject)
        {
            try
            {
                var createdMapping = await _mapTeacherSubjectService.CreateMappingAsync(mapTeacherSubject);
                return CreatedAtAction(nameof(GetMapping), new { id = createdMapping.MapTeacherSubjectId }, createdMapping);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMapping(int id, MapTeacherSubject mapTeacherSubject)
        {
            if (id != mapTeacherSubject.MapTeacherSubjectId)
            {
                return BadRequest();
            }

            await _mapTeacherSubjectService.UpdateMappingAsync(mapTeacherSubject);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMapping(int id)
        {
            await _mapTeacherSubjectService.DeleteMappingAsync(id);
            return NoContent();
        }
    }
}
