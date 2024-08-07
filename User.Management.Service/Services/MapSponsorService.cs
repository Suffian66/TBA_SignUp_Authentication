using Microsoft.EntityFrameworkCore;
using User.Management.Data.DTOs;
using User.Management.Data.Models;

namespace User.Management.Service.Services
{
    public class MapSponsorService : IMapSponsorStudent
    {
        private readonly ApplicationDbContext _context;

        public MapSponsorService(ApplicationDbContext context)
        {
            _context = context;
        }

        public MapSponsorStudents AddMapSponsorStudent(MapSponsorStudentDto mapSponsorStd)
        {
            // Check if the student is already sponsored
            var existingSponsorship = _context.MapSponsorStudents.FirstOrDefault(s => s.StudentId == mapSponsorStd.StudentId);

            if (existingSponsorship != null)
            {
                // Return a message indicating that the student is already sponsored
                throw new InvalidOperationException("Student is already sponsored!");
            }

            var mapSponsor = new MapSponsorStudents
            {
                //MapSponsorStudentsId = mapstudent.MapSponsorStudentsId,
                //StudentsReports = mapSponsorStd.StudentsReports,
                DonationAmount = mapSponsorStd.DonationAmount,
                DonationFrequency = mapSponsorStd.DonationFrequency,
                DonationStartDate = mapSponsorStd.DonationStartDate,
                DonationChannel = mapSponsorStd.DonationChannel,
                DonationSourceAccount = mapSponsorStd.DonationSourceAccount,
                DonationDestinationAccount = mapSponsorStd.DonationDestinationAccount,
                Notes = mapSponsorStd.Notes,
                StudentId = mapSponsorStd.StudentId,
                Id = mapSponsorStd.Id
            };
            _context.MapSponsorStudents.Add(mapSponsor);
            _context.SaveChanges();

            return mapSponsor; // Return the created entity
        }

        public async Task<IEnumerable<MapSponsorAllStudentsDto>> GetAllMapSponsorStudent()
        {
            var mapSponsorStudents = await _context.MapSponsorStudents.ToListAsync();
            var students = await _context.Students.ToListAsync();
            var users = await _context.Users.ToListAsync();
            var lookupCategoryDetails = await _context.LookupsCategoryDetail.ToListAsync(); // Assuming this is the table for class names

            var result = mapSponsorStudents.Select(mapSponsorStudent =>
            {
                var newStudent = students.FirstOrDefault(student => student.StudentId == mapSponsorStudent.StudentId);
                var newUser = users.FirstOrDefault(user => user.Id == mapSponsorStudent.Id);
                var classDetail = lookupCategoryDetails.FirstOrDefault(l => l.LookUpCtgDetailId == newStudent.ClassId); // Assuming ClassId is the foreign key

                if (newStudent != null && newUser != null && classDetail != null)
                {
                    return new MapSponsorAllStudentsDto
                    {
                        //StudentsReports = mapSponsorStudent.StudentsReports,
                        DonationAmount = mapSponsorStudent.DonationAmount,
                        DonationFrequency = mapSponsorStudent.DonationFrequency,
                        DonationStartDate = mapSponsorStudent.DonationStartDate,
                        DonationChannel = mapSponsorStudent.DonationChannel,
                        DonationSourceAccount = mapSponsorStudent.DonationSourceAccount,
                        DonationDestinationAccount = mapSponsorStudent.DonationDestinationAccount,
                        Notes = mapSponsorStudent.Notes,
                        StudentId = newStudent.StudentId,
                        Id = newUser.Id,
                        GR_No = newStudent.GR_No,
                        FirstName = newStudent.FirstName,
                        LastName = newStudent.LastName,
                        Class = classDetail.Title // Assuming 'Name' is the column for class name
                    };
                }
                return null;
            }).Where(dto => dto != null) // Filter out null results
              .ToList();

            return result;
        }

        public async Task<MapSponsorStudentDto> GetMapSponsorStudentById(int studentId)
        {
            var mapSponsorStudent = await _context.MapSponsorStudents.FirstOrDefaultAsync(m => m.StudentId == studentId);

            if (mapSponsorStudent == null)
            {
                return null;
            }

            var student = await _context.Students.FirstOrDefaultAsync(s => s.StudentId == mapSponsorStudent.StudentId);
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == mapSponsorStudent.Id);
            var classDetail = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(l => l.LookUpCtgDetailId == student.ClassId);

            if (student == null || user == null || classDetail == null)
            {
                return null;
            }

            return new MapSponsorStudentDto
            {
                MapSponsorStudentsId = mapSponsorStudent.MapSponsorStudentsId,
                DonationAmount = mapSponsorStudent.DonationAmount,
                DonationFrequency = mapSponsorStudent.DonationFrequency,
                DonationStartDate = mapSponsorStudent.DonationStartDate,
                DonationChannel = mapSponsorStudent.DonationChannel,
                DonationSourceAccount = mapSponsorStudent.DonationSourceAccount,
                DonationDestinationAccount = mapSponsorStudent.DonationDestinationAccount,
                Notes = mapSponsorStudent.Notes,
                StudentId = student.StudentId,
                Id = user.Id,
                GR_No = student?.GR_No,
                FirstName = student.FirstName,
                LastName = student.LastName,
                Class = classDetail.Title
            };
        }



        public MapSponsorStudents UpdateMapSponsorStudent(int id, UpdateMapSponsorDto mapSponsorStd)
        {
            var existingSponsorship = _context.MapSponsorStudents.FirstOrDefault(s => s.StudentId == id);
            if (existingSponsorship == null)
            {
                throw new InvalidOperationException("Sponsorship not found!");
            }

            //existingSponsorship.MapSponsorStudentsId = mapSponsorStd.;
            existingSponsorship.DonationAmount = mapSponsorStd.DonationAmount;
            existingSponsorship.DonationFrequency = mapSponsorStd.DonationFrequency;
            existingSponsorship.DonationStartDate = mapSponsorStd.DonationStartDate;
            existingSponsorship.DonationChannel = mapSponsorStd.DonationChannel;
            existingSponsorship.DonationSourceAccount = mapSponsorStd.DonationSourceAccount;
            existingSponsorship.DonationDestinationAccount = mapSponsorStd.DonationDestinationAccount;
            existingSponsorship.Notes = mapSponsorStd.Notes;
            existingSponsorship.StudentId = mapSponsorStd.StudentId;
            existingSponsorship.Id = mapSponsorStd.Id;


            _context.MapSponsorStudents.Update(existingSponsorship);
            _context.SaveChanges();

            return existingSponsorship;
        }
        public void DeleteMapSponsorStudent(int id)
        {
            var existingSponsorship = _context.MapSponsorStudents.FirstOrDefault(s => s.StudentId == id);
            if (existingSponsorship == null)
            {
                throw new InvalidOperationException("Sponsorship not found!");
            }

            _context.MapSponsorStudents.Remove(existingSponsorship);
            _context.SaveChanges();
        }

    }
}
