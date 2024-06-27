using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
                    StudentsReports = mapSponsorStd.StudentsReports,
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
            var classes = await _context.Class.ToListAsync();

            var result = mapSponsorStudents.Select(mapSponsorStudent =>
            {
                var newStudent = students.FirstOrDefault(student => student.StudentId == mapSponsorStudent.StudentId);
                var newUser = users.FirstOrDefault(user => user.Id == mapSponsorStudent.Id);
                var newClass = classes.FirstOrDefault(x => x.ClassId == newStudent.ClassId);

                if (newStudent != null && newUser != null && newClass != null)
                {
                    return new MapSponsorAllStudentsDto
                {
                    StudentsReports = mapSponsorStudent.StudentsReports,
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
                    FirstName = newUser.FirstName,
                    LastName = newUser.LastName,
                    ClassName = newClass.ClassName
                };
                }
                return null;
            }).Where(dto => dto != null) // Filter out null results
              .ToList();

            return result;
        }
    }
}
