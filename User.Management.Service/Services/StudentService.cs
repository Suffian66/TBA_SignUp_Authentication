using Microsoft.EntityFrameworkCore;
using User.Management.Data.Dto;
using User.Management.Data.DTOs;
using User.Management.Data.Models;


namespace User.Management.Service.Services
{
    public class StudentService : IStudent
    {

        private readonly ApplicationDbContext _context;

        public StudentService(ApplicationDbContext context)
        {
            _context = context;

        }

        public async Task<IEnumerable<StudentDto>> GetAllStudents()
        {
            var students = await _context.Students
                                 .Include(s => s.LanguageDetail)
                                 .Include(s => s.ClassDetail)
                                 .Include(s => s.GenderDetail)
                                 .Include(s => s.ResidenceDetail)
                                 .ToListAsync();

            var result = students.Select(student => new StudentDto


            {
                StudentId = student.StudentId,
                FirstName = student.FirstName,
                LastName = student.LastName,
                MiddleName = student.MiddleName,
                Gender = student.GenderDetail?.Title,
                DOB = student.DOB,
                GR_No = student.GR_No,
                Language = student.LanguageDetail?.Title,
                ResidenceStatus = student.ResidenceDetail?.Title,
                DateOfAdmission = student.DateOfAdmission,
                LastClassAttended = student.LastClassAttended,
                DateOfSchoolLeaving = student.DateOfSchoolLeaving,
                MedicalNeeds = student.MedicalNeeds,
                Class = student.ClassDetail?.Title,
            }).ToList();

            return result;
        }

        public StudentDto GetStudentById(int studentId)
        {
            var student = _context.Students.FirstOrDefault(x => x.StudentId == studentId);
            if (student == null)
            {
                // Handle the case where the student is not found
                throw new Exception($"Student with ID {studentId} not found");
            }

            var gender = _context.LookupsCategoryDetail.FirstOrDefault(c => c.LookUpCtgDetailId == student.GenderId);
            var language = _context.LookupsCategoryDetail.FirstOrDefault(c => c.LookUpCtgDetailId == student.LanguageId);
            var residenceStatus = _context.LookupsCategoryDetail.FirstOrDefault(c => c.LookUpCtgDetailId == student.ResidenceId);
            var classAttended = _context.LookupsCategoryDetail.FirstOrDefault(c => c.LookUpCtgDetailId == student.ClassId);
            var address = _context.StudentAddress.FirstOrDefault(a => a.StudentId == studentId);
            var country = address != null ? _context.LookupsCategoryDetail.FirstOrDefault(c => c.LookUpCtgDetailId == address.CountryId) : null;
            var addressType = address != null ? _context.LookupsCategoryDetail.FirstOrDefault(c => c.LookUpCtgDetailId == address.AddressTypeId) : null;
            var studentsFamily = _context.StudentFamily.FirstOrDefault(x => x.StudentId == studentId);

            var result = new StudentDto
            {
                StudentId = student.StudentId,
                FirstName = student.FirstName,
                LastName = student.LastName,
                MiddleName = student.MiddleName,
                Gender = gender?.Title,
                DOB = student.DOB,
                GR_No = student.GR_No,
                Language = language?.Title,
                ResidenceStatus = residenceStatus?.Title,
                DateOfAdmission = student.DateOfAdmission,
                LastClassAttended = student.LastClassAttended,
                DateOfSchoolLeaving = student.DateOfSchoolLeaving,
                MedicalNeeds = student.MedicalNeeds,
                Class = classAttended?.Title,
                Address1 = address?.Address1,
                Address2 = address?.Address2,
                City = address?.City,
                State = address?.State,
                PostalCode = address?.PostalCode,
                Country = country?.Title,
                AddressType = addressType?.Title,
                FamilyMemberName = studentsFamily.FamilyMemberName,
                FamilyRelation = studentsFamily.FamilyRelation,
                PersonOccupation = studentsFamily.PersonOccupation,
                Qualification = studentsFamily.Qualification,
                PersonIncome = studentsFamily.PersonIncome,

            };

            return result;
        }

        public async Task<int> CreateStudentAsync(AddStudentDto dto)
        {
            // Resolve ClassId from ClassName
            var residenceEntity = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(c => c.LookUpCtgDetailId == dto.ResidenceId);
            var genderEntity = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(c => c.LookUpCtgDetailId == dto.GenderId);
            var languageEntity = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(c => c.LookUpCtgDetailId == dto.LanguageId);
            var classEntity = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(c => c.LookUpCtgDetailId == dto.ClassId);

            if (residenceEntity == null && genderEntity == null && languageEntity == null && classEntity == null)
            {
                throw new Exception($"Entity Ids not found");
            }

            // Create a new student entity
            var newStudent = new Student
            {
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                MiddleName = dto.MiddleName,
                GenderId = genderEntity.LookUpCtgDetailId,
                DOB = dto.DOB,
                GR_No = dto.GR_No,
                LanguageId = languageEntity.LookUpCtgDetailId,
                ResidenceId = residenceEntity.LookUpCtgDetailId,
                DateOfAdmission = dto.DateOfAdmission,
                LastClassAttended = dto.LastClassAttended,
                DateOfSchoolLeaving = dto.DateOfSchoolLeaving,
                MedicalNeeds = dto.MedicalNeeds,
                ClassId = classEntity.LookUpCtgDetailId
            };
            _context.Students.Add(newStudent);
            await _context.SaveChangesAsync();

            if (dto.StudentFamilies != null)
            {
                foreach (var familyDto in dto.StudentFamilies)
                {
                    await AddStudentFamilyAsync(familyDto, newStudent.StudentId);
                }
            }
            return newStudent.StudentId;
        }

        private async Task AddStudentFamilyAsync(AddStudentFamilyDto dto, int studentId)
        {
            var studentFamily = new StudentFamily
            {
                FamilyMemberName = dto.FamilyMemberName,
                FamilyRelation = dto.FamilyRelation,
                Qualification = dto.Qualification,
                PersonOccupation = dto.PersonOccupation,
                PersonIncome = dto.PersonIncome,
                StudentId = studentId
            };

            _context.StudentFamily.Add(studentFamily);
            await _context.SaveChangesAsync();
        }

        public async Task<UpdateStudentDto> UpdateStudentAsync(int studentId, UpdateStudentDto dto)
        {
            var student = await _context.Students.FirstOrDefaultAsync(s => s.StudentId == studentId);
            if (student == null)
            {
                throw new Exception("Student not found");
            }

            var genderEntity = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(c => c.Title == dto.Gender);
            var languageEntity = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(c => c.Title == dto.Language);
            var residenceEntity = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(c => c.Title == dto.ResidenceStatus);
            var classEntity = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(c => c.Title == dto.Class);
            var studentFamily = await _context.StudentFamily.FirstOrDefaultAsync(s => s.StudentId == studentId);
            var address = _context.StudentAddress.Include(a => a.CountryDetail).Include(a => a.AddressDetail).FirstOrDefault(a => a.StudentId == studentId);

            student.FirstName = dto?.FirstName;
            student.LastName = dto?.LastName;
            student.MiddleName = dto?.MiddleName;
            student.GenderId = genderEntity?.LookUpCtgDetailId;
            student.DOB = dto?.DOB;
            student.GR_No = dto.GR_No;
            student.LanguageId = languageEntity?.LookUpCtgDetailId;
            student.ResidenceId = residenceEntity?.LookUpCtgDetailId;
            student.DateOfAdmission = dto?.DateOfAdmission;
            student.LastClassAttended = dto?.LastClassAttended;
            student.DateOfSchoolLeaving = dto?.DateOfSchoolLeaving;
            student.MedicalNeeds = dto?.MedicalNeeds;
            student.ClassId = classEntity?.LookUpCtgDetailId;
            studentFamily.FamilyMemberName = dto?.FamilyMemberName;
            studentFamily.FamilyRelation = dto?.FamilyRelation;
            studentFamily.PersonOccupation = dto?.PersonOccupation;
            studentFamily.PersonIncome = dto.PersonIncome;
            studentFamily.Qualification = dto?.Qualification;
            address.Address1 = dto?.Address1;
            address.Address2 = dto?.Address2;
            address.City = dto?.City;
            address.State = dto?.State;
            address.PostalCode = dto.PostalCode;
            address.CountryDetail.Title = dto?.Country;
            address.AddressDetail.Title = dto?.AddressType;

            //_context.Students.Update(student);
            await _context.SaveChangesAsync();
            return dto;
        }
        //public async Task<UpdateStudentFamilyDto> UpdateStudentFamilyAsync(int studentFamilyId, UpdateStudentFamilyDto updateStudentFamilyDto)
        //{
        //    // Fetch the student family entity based on studentId and family member name
        //    var studentFamily = _context.StudentFamily
        //        .FirstOrDefault(sf => sf.StudentId == studentFamilyId);

        //    if (studentFamily == null)
        //    {
        //        // Handle the case where the family member is not found
        //        return null;
        //    }

        //    // Update the student family details
        //    studentFamily.FamilyMemberName = updateStudentFamilyDto.FamilyMemberName;
        //    studentFamily.FamilyRelation = updateStudentFamilyDto.FamilyRelation;
        //    studentFamily.Qualification = updateStudentFamilyDto.Qualification;
        //    studentFamily.PersonOccupation = updateStudentFamilyDto.PersonOccupation;
        //    studentFamily.PersonIncome = updateStudentFamilyDto.PersonIncome;

        //    // Save the changes
        //    //_context.StudentFamily.Update(studentFamily);
        //    _context.SaveChangesAsync();

        //    return updateStudentFamilyDto;
        //}

    }
}
