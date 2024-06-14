﻿using Microsoft.AspNetCore.Mvc;
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

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Teacher>>> GetTeachers()
        {
            try
            {
                var teachers = await _teacherService.GetAllTeachersAsync();
                return Ok(teachers);
            }
            catch (Exception)
            {

                throw;
            }

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Teacher>> GetTeacher(string id)
        {
            var teacher = await _teacherService.GetTeacherByIdAsync(id);
            if (teacher == null)
            {
                return NotFound();
            }
            return Ok(teacher);
        }

        [HttpPost]
        public async Task<ActionResult<Teacher>> CreateTeacher(Teacher teacher)
        {
            try
            {
                var createdTeacher = await _teacherService.CreateTeacherAsync(teacher);
                return CreatedAtAction(nameof(GetTeacher), new { id = createdTeacher.TeacherId }, createdTeacher);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTeacher(string id, Teacher teacher)
        {
            if (id != teacher.TeacherId)
            {
                return BadRequest();
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

