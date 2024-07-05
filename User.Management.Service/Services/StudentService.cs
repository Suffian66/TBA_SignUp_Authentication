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
            var students = _context.Students.FirstOrDefault(x => x.StudentId == studentId);
            var gender = _context.LookupsCategoryDetail.FirstOrDefault(c => c.LookUpCtgDetailId == students.GenderId);
            var language = _context.LookupsCategoryDetail.FirstOrDefault(c => c.LookUpCtgDetailId == students.LanguageId);
            var residenceStatus = _context.LookupsCategoryDetail.FirstOrDefault(c => c.LookUpCtgDetailId == students.ResidenceId);
            var classAttended = _context.LookupsCategoryDetail.FirstOrDefault(c => c.LookUpCtgDetailId == students.ClassId);
            var studentsFamily = _context.StudentFamily.Where(x => x.StudentId == studentId).ToList();

            if (students != null && gender != null && language != null && residenceStatus != null && classAttended != null)
            {
                var result = new StudentDto

                {
                    StudentId = students.StudentId,
                    FirstName = students.FirstName,
                    LastName = students.LastName,
                    MiddleName = students.MiddleName,
                    Gender = gender?.Title,
                    DOB = students.DOB,
                    GR_No = students.GR_No,
                    Language = language?.Title,
                    ResidenceStatus = residenceStatus?.Title,
                    DateOfAdmission = students.DateOfAdmission,
                    LastClassAttended = students.LastClassAttended,
                    DateOfSchoolLeaving = students.DateOfSchoolLeaving,
                    MedicalNeeds = students.MedicalNeeds,
                    Class = classAttended?.Title,
                    StudentFamilies = studentsFamily
                };
                return result;
            }
            return null;
        }

        public async Task<int> CreateStudentAsync(AddStudentDto dto)
        {
            // Resolve ClassId from ClassName
            var residenceEntity = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(c => c.Title == dto.ResidenceStatus);
            var genderEntity = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(c => c.Title == dto.Gender);
            var languageEntity = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(c => c.Title == dto.Language);
            var classEntity = await _context.LookupsCategoryDetail.FirstOrDefaultAsync(c => c.Title == dto.Class);

            if (residenceEntity == null && genderEntity == null && languageEntity == null && classEntity == null)
            {
                throw new Exception($"Class with name not found");
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


    }
}
