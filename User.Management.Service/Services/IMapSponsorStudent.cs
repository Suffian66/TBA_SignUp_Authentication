using User.Management.Data.DTOs;
using User.Management.Data.Models;

namespace User.Management.Service.Services
{
    public interface IMapSponsorStudent
    {
        MapSponsorStudents AddMapSponsorStudent(MapSponsorStudentDto mapsponsorstd);
        Task<IEnumerable<MapSponsorAllStudentsDto>> GetAllMapSponsorStudent();
        public Task<MapSponsorStudentDto> GetMapSponsorStudentById(int studentId);
        MapSponsorStudents UpdateMapSponsorStudent(int id, UpdateMapSponsorDto mapSponsorStd);

        void DeleteMapSponsorStudent(int studentId);
    }
}
