
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

        //public DbSet<SponsorDetails> SponsorDetails { get; set; }
        public DbSet<Address> Address { get; set; }
        public DbSet<Class> Class { get; set; }
        //public DbSet<CourseDetail> Courses { get; set; }
        public DbSet<Student> Students { get; set; }

        //public DbSet<Subject> Subjects { get; set; }

        public DbSet<StudentFamily> StudentFamily { get; set; }
        //public DbSet<Subject> Subjects { get; set; }
        public DbSet<LookUpCategory> LookupsCategory { get; set; }
        public DbSet<LookUpCategoryDetail> LookupsCategoryDetail { get; set; }
        public DbSet<LookUpCountry> LookupsCountry { get; set; }
        public DbSet<Sponsor> Sponsors { get; set; }
        public DbSet<MapSponsorStudents> MapSponsorStudents { get; set; }

        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<MapTeacherSubject> MapTeacherSubject { get; set; }
        public DbSet<MapClassSubjectTeacher> MapClassSubjectTeacher { get; set; }




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
                .HasOne(mss => mss.Sponsors)
                .WithMany()
                .HasForeignKey(mss => mss.SponsorId)
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
            .OnDelete(DeleteBehavior.NoAction)
            ;

        }

        private static void SeedRoles(ModelBuilder builder)
        {
            builder.Entity<IdentityRole>().HasData
                (
                    new IdentityRole() { Name = "Admin", ConcurrencyStamp = "1", NormalizedName = "Admin" },
                    new IdentityRole() { Name = "Sponsor", ConcurrencyStamp = "2", NormalizedName = "Sponsor" },
                    new IdentityRole() { Name = "Teacher", ConcurrencyStamp = "3", NormalizedName = "Teacher" },
                    new IdentityRole() { Name = "Student", ConcurrencyStamp = "4", NormalizedName = "Student" },
                    new IdentityRole() { Name = "AssistanceTeacher", ConcurrencyStamp = "5", NormalizedName = "AssistantTeacher" }

                );


        }
    }
}
