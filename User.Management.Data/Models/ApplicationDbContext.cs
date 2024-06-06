
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
        public DbSet<Classes> Classes { get; set; }

        public DbSet<CourseDetail> Courses { get; set; }

        public DbSet<Student> Students { get; set; }

        public DbSet<Subject> Subjects { get; set; }

        public DbSet<LookUpCategory> LookupsCategory { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            SeedRoles(builder);


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
