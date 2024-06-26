﻿using User.Management.Data.DTOs;
using User.Management.Data.Models;

namespace User.Management.Services
{
    public interface ITeacherService
    {
        Task<IEnumerable<Teacher>> GetAllTeachersAsync();
        Task<TeacherDto> GetTeacherByIdAsync(string teacherId);
        Task<Teacher> CreateTeacherAsync(Teacher teacher);
        Task UpdateTeacherAsync(Teacher teacher);
        Task DeleteTeacherAsync(string teacherId);
    }
}
