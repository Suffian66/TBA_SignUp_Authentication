using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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

        public void AddMapSponsorStudent(MapSponsorStudents mapstudent)
        {
            var mapSponsor = new MapSponsorStudents
            {
                //MapSponsorStudentsId = mapstudent.MapSponsorStudentsId,
                StudentsReports = mapstudent.StudentsReports,
                DonationAmount = mapstudent.DonationAmount,
                DonationFrequency = mapstudent.DonationFrequency,
                DonationStartDate = mapstudent.DonationStartDate,
                DonationChannel = mapstudent.DonationChannel,
                DonationSourceAccount = mapstudent.DonationSourceAccount,
                DonationDestinationAccount = mapstudent.DonationDestinationAccount,
                Notes = mapstudent.Notes,
                //StudentId = mapstudent.StudentId,
                //SponsorId = mapstudent.SponsorId
            };
            _context.MapSponsorStudents.Add(mapSponsor);
            _context.SaveChanges();
        }
    }
}
