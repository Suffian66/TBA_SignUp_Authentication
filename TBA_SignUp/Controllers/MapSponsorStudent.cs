using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using User.Management.Data.Models;
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
        public IActionResult Create(MapSponsorStudents mapstudent)
        {
            if (ModelState.IsValid)
            {
                _mapSponsorStudent.AddMapSponsorStudent(mapstudent);
                return CreatedAtAction(nameof(Create), new { id = mapstudent.MapSponsorStudentsId }, mapstudent); // Returns 201 Created
            }
            return BadRequest(ModelState); // Returns 400 Bad Request
        }
    }
}
