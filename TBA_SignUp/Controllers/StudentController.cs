using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using User.Management.Data.Dto;
using User.Management.Data.Models;
using User.Management.Service.Services;

namespace TBA_SignUp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudent _student;
        private readonly ApplicationDbContext _context;

        public StudentController(IStudent student, ApplicationDbContext context)
        {
            _student = student;
            _context = context;
        }

        

        [HttpGet("[action]")]
        public async Task<IActionResult> GetAllStudents()
        {
            try
            {
                var students = await _student.GetAllStudents();
                return Ok(students);
            }
            catch (Exception ex)
            {
                // Log the exception details (ex) here for debugging purposes
                return StatusCode(500, "Internal server error");
            }
        }

        //[HttpPost]
        //[Route("add")]
        //public async Task<ActionResult> AddStudent(Student student)
        //{
        //    if (student == null)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    _studentService.AddStudent(student);
        //    return Ok("Student added successfully");
        //}
    }
}
