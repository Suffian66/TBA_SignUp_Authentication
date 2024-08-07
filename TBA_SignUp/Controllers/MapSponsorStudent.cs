using Microsoft.AspNetCore.Mvc;
using User.Management.Data.DTOs;
using User.Management.Service.Services;

namespace TBA_SignUp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MapSponsorStudent : ControllerBase
    {
        private readonly IMapSponsorStudent _mapSponsorStudent;

        public MapSponsorStudent(IMapSponsorStudent mapSponsorStudent)
        {
            _mapSponsorStudent = mapSponsorStudent;
        }


        [HttpPost]
        public IActionResult AddMapSponsorStudent([FromBody] MapSponsorStudentDto mapSponsorStd)

        {
            if (mapSponsorStd == null)
            {
                return BadRequest("Invalid data.");
            }
            try
            {
                var createdMapSponsorStudent = _mapSponsorStudent.AddMapSponsorStudent(mapSponsorStd);

                // Assuming createdMapSponsorStudent is the created entity
                return CreatedAtAction(nameof(AddMapSponsorStudent), new { id = createdMapSponsorStudent.MapSponsorStudentsId }, createdMapSponsorStudent);
            }
            catch (InvalidOperationException ex)
            {
                // Return a BadRequest with the specific message for the already sponsored student
                return BadRequest(new { Message = ex.Message });
            }
            catch (Exception ex)
            {
                // Log the exception (consider using a logging framework)
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("GetAllMapSponsorStudents")]
        public async Task<ActionResult<IEnumerable<MapSponsorAllStudentsDto>>> GetAllMapSponsorStudents()
        {
            try
            {
                var result = await _mapSponsorStudent.GetAllMapSponsorStudent();
                if (result == null)
                {
                    return NotFound("No data found.");
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
                // Log the exception (you can use a logging framework for this)
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetMapSponsorStudentById(int studentId)
        {
            var result = await _mapSponsorStudent.GetMapSponsorStudentById(studentId);

            if (result == null)
            {
                return NotFound("Sponsor student mapping not found");
            }

            return Ok(result);
        }

        [HttpPut("[action]")]
        public IActionResult UpdateMapSponsorStudent(int id, [FromBody] UpdateMapSponsorDto mapSponsorStd)
        {
            if (mapSponsorStd == null || id == 0)
            {
                return BadRequest("Invalid data.");
            }
            try
            {
                var updatedMapSponsorStudent = _mapSponsorStudent.UpdateMapSponsorStudent(id, mapSponsorStd);
                return Ok(updatedMapSponsorStudent);
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("[action]")]
        public IActionResult DeleteMapSponsorStudent(int id)
        {
            try
            {
                _mapSponsorStudent.DeleteMapSponsorStudent(id);
                return Ok(new { message = "Student deleted successfully." });
            }
            catch (InvalidOperationException ex)
            {
                return NotFound(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while deleting the sponsorship.", details = ex.Message });
            }
        }

    }
}
