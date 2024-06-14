using User.Management.Data.Models;

namespace User.Management.Services
{
    public interface IMapTeacherSubjectService
    {
        Task<IEnumerable<MapTeacherSubject>> GetAllMappingsAsync();
        Task<MapTeacherSubject> GetMappingByIdAsync(int mapTeacherSubjectId);
        Task<MapTeacherSubject> CreateMappingAsync(MapTeacherSubject mapTeacherSubject);
        Task UpdateMappingAsync(MapTeacherSubject mapTeacherSubject);
        Task DeleteMappingAsync(int mapTeacherSubjectId);
    }
}
