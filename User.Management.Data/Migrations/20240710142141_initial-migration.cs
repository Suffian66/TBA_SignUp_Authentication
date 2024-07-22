using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace User.Management.Data.Migrations
{
    public partial class initialmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MiddleName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NamePrefix = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DOB = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CNIC = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Occupation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DateUpdated = table.Column<DateTime>(type: "datetime2", nullable: true),
                    StatusInfo = table.Column<bool>(type: "bit", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LookupsCategory",
                columns: table => new
                {
                    LookUpCtgId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedBy = table.Column<int>(type: "int", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedBy = table.Column<int>(type: "int", nullable: false),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LookupsCategory", x => x.LookUpCtgId);
                });

            migrationBuilder.CreateTable(
                name: "Subject",
                columns: table => new
                {
                    SubjectId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SubjectName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedBy = table.Column<int>(type: "int", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedBy = table.Column<int>(type: "int", nullable: false),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subject", x => x.SubjectId);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Teachers",
                columns: table => new
                {
                    TeacherId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Father_HusbandName = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    DegreeQualification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Certification = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Salary = table.Column<int>(type: "int", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teachers", x => x.TeacherId);
                    table.ForeignKey(
                        name: "FK_Teachers_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LookupsCategoryDetail",
                columns: table => new
                {
                    LookUpCtgDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedBy = table.Column<int>(type: "int", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedBy = table.Column<int>(type: "int", nullable: false),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    LookUpCtgId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LookupsCategoryDetail", x => x.LookUpCtgDetailId);
                    table.ForeignKey(
                        name: "FK_LookupsCategoryDetail_LookupsCategory_LookUpCtgId",
                        column: x => x.LookUpCtgId,
                        principalTable: "LookupsCategory",
                        principalColumn: "LookUpCtgId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MapClassSubjectTeacher",
                columns: table => new
                {
                    MapClassSubjectTeacherId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClassId = table.Column<int>(type: "int", nullable: false),
                    SubjectId = table.Column<int>(type: "int", nullable: false),
                    TeacherAssistantId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    TeacherId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PeriodId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MapClassSubjectTeacher", x => x.MapClassSubjectTeacherId);
                    table.ForeignKey(
                        name: "FK_MapClassSubjectTeacher_AspNetUsers_TeacherAssistantId",
                        column: x => x.TeacherAssistantId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_MapClassSubjectTeacher_LookupsCategoryDetail_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "LookupsCategoryDetail",
                        principalColumn: "LookUpCtgDetailId");
                });

            migrationBuilder.CreateTable(
                name: "MapTeacherSubject",
                columns: table => new
                {
                    MapTeacherSubjectId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClassId = table.Column<int>(type: "int", nullable: false),
                    ClassDetailLookUpCtgDetailId = table.Column<int>(type: "int", nullable: false),
                    SubjectId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MapTeacherSubject", x => x.MapTeacherSubjectId);
                    table.ForeignKey(
                        name: "FK_MapTeacherSubject_AspNetUsers_Id",
                        column: x => x.Id,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MapTeacherSubject_LookupsCategoryDetail_ClassDetailLookUpCtgDetailId",
                        column: x => x.ClassDetailLookUpCtgDetailId,
                        principalTable: "LookupsCategoryDetail",
                        principalColumn: "LookUpCtgDetailId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MapTeacherSubject_Subject_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "Subject",
                        principalColumn: "SubjectId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    StudentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MiddleName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DOB = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GR_No = table.Column<int>(type: "int", nullable: false),
                    DateOfAdmission = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastClassAttended = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateOfSchoolLeaving = table.Column<DateTime>(type: "datetime2", nullable: true),
                    MedicalNeeds = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<int>(type: "int", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    UpdatedBy = table.Column<int>(type: "int", nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    ClassId = table.Column<int>(type: "int", nullable: true),
                    LanguageId = table.Column<int>(type: "int", nullable: true),
                    GenderId = table.Column<int>(type: "int", nullable: true),
                    ResidenceId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.StudentId);
                    table.ForeignKey(
                        name: "FK_Students_LookupsCategoryDetail_ClassId",
                        column: x => x.ClassId,
                        principalTable: "LookupsCategoryDetail",
                        principalColumn: "LookUpCtgDetailId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Students_LookupsCategoryDetail_GenderId",
                        column: x => x.GenderId,
                        principalTable: "LookupsCategoryDetail",
                        principalColumn: "LookUpCtgDetailId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Students_LookupsCategoryDetail_LanguageId",
                        column: x => x.LanguageId,
                        principalTable: "LookupsCategoryDetail",
                        principalColumn: "LookUpCtgDetailId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Students_LookupsCategoryDetail_ResidenceId",
                        column: x => x.ResidenceId,
                        principalTable: "LookupsCategoryDetail",
                        principalColumn: "LookUpCtgDetailId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Address",
                columns: table => new
                {
                    AddressId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AddressPrimary = table.Column<bool>(type: "bit", nullable: false),
                    Address1 = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Address2 = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    City = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    State = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    PostalCode = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    CreatedBy = table.Column<int>(type: "int", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedBy = table.Column<int>(type: "int", nullable: false),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    StudentId = table.Column<int>(type: "int", nullable: true),
                    CountryId = table.Column<int>(type: "int", nullable: true),
                    AddressTypeId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Address", x => x.AddressId);
                    table.ForeignKey(
                        name: "FK_Address_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Address_LookupsCategoryDetail_AddressTypeId",
                        column: x => x.AddressTypeId,
                        principalTable: "LookupsCategoryDetail",
                        principalColumn: "LookUpCtgDetailId");
                    table.ForeignKey(
                        name: "FK_Address_LookupsCategoryDetail_CountryId",
                        column: x => x.CountryId,
                        principalTable: "LookupsCategoryDetail",
                        principalColumn: "LookUpCtgDetailId");
                    table.ForeignKey(
                        name: "FK_Address_Students_StudentId",
                        column: x => x.StudentId,
                        principalTable: "Students",
                        principalColumn: "StudentId");
                });

            migrationBuilder.CreateTable(
                name: "MapSponsorStudents",
                columns: table => new
                {
                    MapSponsorStudentsId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StudentsReports = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DonationAmount = table.Column<int>(type: "int", nullable: true),
                    DonationFrequency = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DonationStartDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DonationChannel = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DonationSourceAccount = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DonationDestinationAccount = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StudentId = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MapSponsorStudents", x => x.MapSponsorStudentsId);
                    table.ForeignKey(
                        name: "FK_MapSponsorStudents_AspNetUsers_Id",
                        column: x => x.Id,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_MapSponsorStudents_Students_StudentId",
                        column: x => x.StudentId,
                        principalTable: "Students",
                        principalColumn: "StudentId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "StudentFamily",
                columns: table => new
                {
                    StudentFamilyId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FamilyMemberName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FamilyRelation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Qualification = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PersonOccupation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PersonIncome = table.Column<int>(type: "int", nullable: false),
                    StudentId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentFamily", x => x.StudentFamilyId);
                    table.ForeignKey(
                        name: "FK_StudentFamily_Students_StudentId",
                        column: x => x.StudentId,
                        principalTable: "Students",
                        principalColumn: "StudentId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "084759d6-954b-477b-ae5b-bb68663db083", "5", "AssistanceTeacher", "AssistantTeacher" },
                    { "230cff6e-57b0-4fa6-91bd-705e6bacf2e2", "4", "Student", "Student" },
                    { "28bf4919-ad74-4ff1-9912-0eae62e025b4", "2", "Sponsor", "Sponsor" },
                    { "4a53132b-f124-45a1-9881-1f2e4b95cb74", "1", "Admin", "Admin" },
                    { "b69ded71-ed73-47a6-a541-4adc1faf1a93", "3", "Teacher", "Teacher" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Address_AddressTypeId",
                table: "Address",
                column: "AddressTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_CountryId",
                table: "Address",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_StudentId",
                table: "Address",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_UserId",
                table: "Address",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_LookupsCategoryDetail_LookUpCtgId",
                table: "LookupsCategoryDetail",
                column: "LookUpCtgId");

            migrationBuilder.CreateIndex(
                name: "IX_MapClassSubjectTeacher_SubjectId",
                table: "MapClassSubjectTeacher",
                column: "SubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_MapClassSubjectTeacher_TeacherAssistantId",
                table: "MapClassSubjectTeacher",
                column: "TeacherAssistantId");

            migrationBuilder.CreateIndex(
                name: "IX_MapSponsorStudents_Id",
                table: "MapSponsorStudents",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_MapSponsorStudents_StudentId",
                table: "MapSponsorStudents",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_MapTeacherSubject_ClassDetailLookUpCtgDetailId",
                table: "MapTeacherSubject",
                column: "ClassDetailLookUpCtgDetailId");

            migrationBuilder.CreateIndex(
                name: "IX_MapTeacherSubject_Id",
                table: "MapTeacherSubject",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_MapTeacherSubject_SubjectId",
                table: "MapTeacherSubject",
                column: "SubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_StudentFamily_StudentId",
                table: "StudentFamily",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_ClassId",
                table: "Students",
                column: "ClassId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_GenderId",
                table: "Students",
                column: "GenderId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_LanguageId",
                table: "Students",
                column: "LanguageId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_ResidenceId",
                table: "Students",
                column: "ResidenceId");

            migrationBuilder.CreateIndex(
                name: "IX_Teachers_UserId",
                table: "Teachers",
                column: "UserId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Address");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "MapClassSubjectTeacher");

            migrationBuilder.DropTable(
                name: "MapSponsorStudents");

            migrationBuilder.DropTable(
                name: "MapTeacherSubject");

            migrationBuilder.DropTable(
                name: "StudentFamily");

            migrationBuilder.DropTable(
                name: "Teachers");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Subject");

            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "LookupsCategoryDetail");

            migrationBuilder.DropTable(
                name: "LookupsCategory");
        }
    }
}
