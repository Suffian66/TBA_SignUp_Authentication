using User.Management.Data.Dtos;

namespace User.Management.Services
{
    public interface IMapClassSubjectTeacherService
    {
        Task<MapClassSubjectTeacherDto> CreateMapClassSubjectTeacherAsync(MapClassSubjectTeacherDto dto);
        Task<MapClassSubjectTeacherDto> GetMapClassSubjectTeacherByIdAsync(int id);
        Task<IEnumerable<MapClassSubjectTeacherDto>> GetAllMapClassSubjectTeachersAsync();
        Task<MapClassSubjectTeacherDto> UpdateMapClassSubjectTeacherAsync(int id, MapClassSubjectTeacherDto dto);
        Task<bool> DeleteMapClassSubjectTeacherAsync(int id);
    }
}
