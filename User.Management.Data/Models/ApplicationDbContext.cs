﻿
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
