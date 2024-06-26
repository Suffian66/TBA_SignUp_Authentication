﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using User.Management.Data.Dto;
using User.Management.Data.DTOs;
using User.Management.Data.Models;
using User.Management.Service.Services;

namespace TBA_SignUp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IStudent _student;
        private readonly ApplicationDbContext _context;

        public StudentController(UserManager<ApplicationUser> userManager, IStudent student, ApplicationDbContext context)
        {
            _student = student;
            _context = context;
            _userManager = userManager;
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
                if(student == null){
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
                // Assuming userId is fetched from the currently logged-in user context
                var userId = ""; // Fetch the userId based on your context, e.g., from HttpContext

                var student = await _student.CreateStudentAsync(studentDto);
                return Ok(student);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
