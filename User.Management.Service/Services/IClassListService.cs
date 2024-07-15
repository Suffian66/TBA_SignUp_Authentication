using User.Management.Data.DTOs;

namespace User.Management.Service.Services
{
    public interface IClassListService
    {
        Task<List<GetClassListDto>> GetClassListAsync();
        Task<List<StudentListDto>> GetStudentsByClassNameAsync(string className);
    }
}
