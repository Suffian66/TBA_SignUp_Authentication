using User.Management.Data.DTOs;
using User.Management.Data.Models;

namespace User.Management.Service.Services
{
    public interface IMapSponsorStudent
    {
        MapSponsorStudents AddMapSponsorStudent(MapSponsorStudentDto mapsponsorstd);

        Task<IEnumerable<MapSponsorAllStudentsDto>> GetAllMapSponsorStudent();
        MapSponsorStudents UpdateMapSponsorStudent(int id, MapSponsorStudentDto mapSponsorStd);
    }
}
