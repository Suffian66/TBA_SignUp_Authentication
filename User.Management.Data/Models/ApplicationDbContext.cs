
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace User.Management.Data.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {


        }


        public DbSet<Address> Address { get; set; }

        public DbSet<StudentAddress> StudentAddress { get; set; }
        //public DbSet<CourseDetail> Courses { get; set; }
        public DbSet<Student> Students { get; set; }
        //public DbSet<Subject> Subjects { get; set; }
        public DbSet<StudentFamily> StudentFamily { get; set; }
        //public DbSet<Subject> Subjects { get; set; }
        public DbSet<LookUpCategory> LookupsCategory { get; set; }
        public DbSet<LookUpCategoryDetail> LookupsCategoryDetail { get; set; }

        public DbSet<MapSponsorStudents> MapSponsorStudents { get; set; }

        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<MapTeacherSubject> MapTeacherSubject { get; set; }
        public DbSet<MapClassSubjectTeacher> MapClassSubjectTeacher { get; set; }
        public DbSet<StudentAttendance> StudentAttendance { get; set; }





        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            SeedRoles(builder);

            builder.Entity<MapSponsorStudents>()
               .HasOne(mss => mss.Students)
               .WithMany()
               .HasForeignKey(mss => mss.StudentId)
               .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<MapSponsorStudents>()
                .HasOne(mss => mss.Users)
                .WithMany()
                .HasForeignKey(mss => mss.Id)
                .OnDelete(DeleteBehavior.Restrict);

            base.OnModelCreating(builder);

            builder.Entity<MapClassSubjectTeacher>()
            .HasOne(m => m.LookUpCategoryDetail)
            .WithMany(l => l.MapClassSubjectTeachers)
            .HasForeignKey(m => m.PeriodId)
            .HasForeignKey(m => m.ClassId)
            .HasForeignKey(m => m.SubjectId)
            .OnDelete(DeleteBehavior.NoAction);

            builder.Entity<MapClassSubjectTeacher>()
            .HasOne(m => m.User)
            .WithMany(l => l.MapClassSubjectTeachers)
            .HasForeignKey(m => m.TeacherId)
            .HasForeignKey(m => m.TeacherAssistantId)
            .OnDelete(DeleteBehavior.NoAction);

            builder.Entity<ApplicationUser>()
          .HasOne(a => a.Teacher)
          .WithOne(t => t.User)
          .HasForeignKey<Teacher>(t => t.UserId);

            builder.Entity<Student>()
                .HasOne(s => s.ClassDetail)
                .WithMany()
                .HasForeignKey(s => s.ClassId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Student>()
                .HasOne(s => s.LanguageDetail)
                .WithMany()
                .HasForeignKey(s => s.LanguageId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Student>()
                .HasOne(s => s.GenderDetail)
                .WithMany()
                .HasForeignKey(s => s.GenderId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Student>()
                .HasOne(s => s.ResidenceDetail)
                .WithMany()
                .HasForeignKey(s => s.ResidenceId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Address>()
                .HasOne(a => a.User)
                .WithMany()
                .HasForeignKey(a => a.UserId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.Entity<Address>()
                .HasOne(a => a.CountryDetail)
                .WithMany()
                .HasForeignKey(a => a.CountryId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.Entity<Address>()
                .HasOne(a => a.AddressDetail)
                .WithMany()
                .HasForeignKey(a => a.AddressTypeId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.Entity<StudentAddress>()
                .HasOne(a => a.Students)
                .WithMany()
                .HasForeignKey(a => a.StudentId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.Entity<StudentAddress>()
                .HasOne(a => a.CountryDetail)
                .WithMany()
                .HasForeignKey(a => a.CountryId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.Entity<StudentAddress>()
                .HasOne(a => a.AddressDetail)
                .WithMany()
                .HasForeignKey(a => a.AddressTypeId)
                .OnDelete(DeleteBehavior.NoAction);
        }

        private static void SeedRoles(ModelBuilder builder)
        {
            builder.Entity<IdentityRole>().HasData
                (
                    new IdentityRole() { Name = "Admin", ConcurrencyStamp = "1", NormalizedName = "Admin" },
                    new IdentityRole() { Name = "Sponsor", ConcurrencyStamp = "2", NormalizedName = "Sponsor" },
                    new IdentityRole() { Name = "Teacher", ConcurrencyStamp = "3", NormalizedName = "Teacher" },
                    new IdentityRole() { Name = "Student", ConcurrencyStamp = "4", NormalizedName = "Student" }

                );


        }
    }
}
