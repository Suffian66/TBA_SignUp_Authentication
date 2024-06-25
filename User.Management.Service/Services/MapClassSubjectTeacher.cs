using Microsoft.EntityFrameworkCore;
using User.Management.Data.Dtos;
using User.Management.Data.Models;

namespace User.Management.Services
{
    public class MapClassSubjectTeacherService : IMapClassSubjectTeacherService
    {
        private readonly ApplicationDbContext _context;

        public MapClassSubjectTeacherService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<MapClassSubjectTeacherDto> CreateMapClassSubjectTeacherAsync(MapClassSubjectTeacherDto dto)
        {
            var entity = new MapClassSubjectTeacher
            {
                ClassId = dto.ClassId,
                SubjectId = dto.SubjectId,
                TeacherAssistantId = dto.TeacherAssistantId,
                TeacherId = dto.TeacherId,
                PeriodId = dto.PeriodId
            };

            _context.MapClassSubjectTeacher.Add(entity);
            await _context.SaveChangesAsync();

            dto.MapClassSubjectTeacherId = entity.MapClassSubjectTeacherId;
            return dto;
        }

        public async Task<MapClassSubjectTeacherDto> GetMapClassSubjectTeacherByIdAsync(int id)
        {
            var entity = await _context.MapClassSubjectTeacher.FindAsync(id);
            if (entity == null) return null;

            return new MapClassSubjectTeacherDto
            {
                MapClassSubjectTeacherId = entity.MapClassSubjectTeacherId,
                ClassId = entity.ClassId,
                SubjectId = entity.SubjectId,
                TeacherAssistantId = entity.TeacherAssistantId,
                TeacherId = entity.TeacherId,
                PeriodId = entity.PeriodId
            };
        }

        public async Task<IEnumerable<MapClassSubjectTeacherDto>> GetAllMapClassSubjectTeachersAsync()
        {
            return await _context.MapClassSubjectTeacher
                .Select(entity => new MapClassSubjectTeacherDto
                {
                    MapClassSubjectTeacherId = entity.MapClassSubjectTeacherId,
                    ClassId = entity.ClassId,
                    SubjectId = entity.SubjectId,
                    TeacherAssistantId = entity.TeacherAssistantId,
                    TeacherId = entity.TeacherId,
                    PeriodId = entity.PeriodId
                }).ToListAsync();
        }

        public async Task<MapClassSubjectTeacherDto> UpdateMapClassSubjectTeacherAsync(int id, MapClassSubjectTeacherDto dto)
        {
            var entity = await _context.MapClassSubjectTeacher.FindAsync(id);
            if (entity == null) return null;

            entity.ClassId = dto.ClassId;
            entity.SubjectId = dto.SubjectId;
            entity.TeacherAssistantId = dto.TeacherAssistantId;
            entity.TeacherId = dto.TeacherId;
            entity.PeriodId = dto.PeriodId;

            await _context.SaveChangesAsync();
            return dto;
        }

        public async Task<bool> DeleteMapClassSubjectTeacherAsync(int id)
        {
            var entity = await _context.MapClassSubjectTeacher.FindAsync(id);
            if (entity == null) return false;

            _context.MapClassSubjectTeacher.Remove(entity);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
