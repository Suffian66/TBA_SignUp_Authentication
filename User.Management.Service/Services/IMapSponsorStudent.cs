using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using User.Management.Data.Models;

namespace User.Management.Service.Services
{
    public interface IMapSponsorStudent
    {
        void AddMapSponsorStudent(MapSponsorStudents mapstudent);
    }
}
