using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using User.Management.Data.Dto;
using User.Management.Data.DTOs;
using User.Management.Data.Models;
using User.Management.Service.Services;
using User.Management.Services;

namespace TBA_SignUp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IStudent _student;
        private readonly IAddressService _address;
        private readonly ApplicationDbContext _context;
        private readonly IStudent _studentfamily;


        public StudentController(UserManager<ApplicationUser> userManager, IStudent student, IAddressService address, ApplicationDbContext context, IStudent studentfamily)
        {
            _student = student;
            _address = address;
            _context = context;
            _userManager = userManager;
            _studentfamily = studentfamily;
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

        [HttpGet("[action]")]
        public async Task<ActionResult<StudentDto?>> GetStudentById(int studentId)
        {
            try
            {
                var student = _student.GetStudentById(studentId);

                if (student == null)
                {
                    return NotFound();
                }
                return Ok(student);
            }
            catch (Exception ex)
            {
                // Log the exception details (ex) here for debugging purposes
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> CreateStudentAsync([FromBody] AddStudentDto studentDto)
        {
            try
            {
                int studentId = await _student.CreateStudentAsync(studentDto);
                return Ok(new { StudentId = studentId });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut("[action]")]
        public async Task<IActionResult> UpdateStudent(int studentId, [FromBody] UpdateStudentDto dto)
        {
            try
            {
                var result = await _student.UpdateStudentAsync(studentId, dto);
                if (result != null)
                {
                    return Ok(result);
                }
                return BadRequest("Failed to update student");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
