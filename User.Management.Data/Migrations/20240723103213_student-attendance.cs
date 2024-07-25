using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace User.Management.Data.Migrations
{
    public partial class studentattendance : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "010054e8-5f24-41c2-90d5-76b49ef8b359");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0a76f359-6b0f-4a34-9e0e-40e6c998f0c9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "53c2313f-fa8d-401e-876e-857bd5e3bdf3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d9a7666d-4baa-4c40-8b05-c5728a49dad9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fe13d603-ff5b-4c38-942d-b23578c4622a");

            migrationBuilder.CreateTable(
                name: "StudentAttendance",
                columns: table => new
                {
                    StudentAttendanceId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Attandance = table.Column<bool>(type: "bit", nullable: false),
                    AttendanceDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Remarks = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClassId = table.Column<int>(type: "int", nullable: true),
                    ClassDetailLookUpCtgDetailId = table.Column<int>(type: "int", nullable: false),
                    StudentId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentAttendance", x => x.StudentAttendanceId);
                    table.ForeignKey(
                        name: "FK_StudentAttendance_LookupsCategoryDetail_ClassDetailLookUpCtgDetailId",
                        column: x => x.ClassDetailLookUpCtgDetailId,
                        principalTable: "LookupsCategoryDetail",
                        principalColumn: "LookUpCtgDetailId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_StudentAttendance_Students_StudentId",
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
                    { "0fc0ebb1-238c-4f62-8924-6ffd6f0e4102", "2", "Sponsor", "Sponsor" },
                    { "8666e79c-62e2-4010-94e6-74b25d8fc48b", "4", "Student", "Student" },
                    { "b436283d-91a0-4449-ba5e-24cf32e93d58", "5", "AssistanceTeacher", "AssistantTeacher" },
                    { "e54bf4d0-3fb2-4dbb-9972-14e198eb83b5", "1", "Admin", "Admin" },
                    { "f53819ed-c1ab-4d13-a0c4-19b87cb34cb5", "3", "Teacher", "Teacher" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_StudentAttendance_ClassDetailLookUpCtgDetailId",
                table: "StudentAttendance",
                column: "ClassDetailLookUpCtgDetailId");

            migrationBuilder.CreateIndex(
                name: "IX_StudentAttendance_StudentId",
                table: "StudentAttendance",
                column: "StudentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StudentAttendance");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0fc0ebb1-238c-4f62-8924-6ffd6f0e4102");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8666e79c-62e2-4010-94e6-74b25d8fc48b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b436283d-91a0-4449-ba5e-24cf32e93d58");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e54bf4d0-3fb2-4dbb-9972-14e198eb83b5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f53819ed-c1ab-4d13-a0c4-19b87cb34cb5");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "010054e8-5f24-41c2-90d5-76b49ef8b359", "3", "Teacher", "Teacher" },
                    { "0a76f359-6b0f-4a34-9e0e-40e6c998f0c9", "5", "AssistanceTeacher", "AssistantTeacher" },
                    { "53c2313f-fa8d-401e-876e-857bd5e3bdf3", "1", "Admin", "Admin" },
                    { "d9a7666d-4baa-4c40-8b05-c5728a49dad9", "4", "Student", "Student" },
                    { "fe13d603-ff5b-4c38-942d-b23578c4622a", "2", "Sponsor", "Sponsor" }
                });
        }
    }
}
