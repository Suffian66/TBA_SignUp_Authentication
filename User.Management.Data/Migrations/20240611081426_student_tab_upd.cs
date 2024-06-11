using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace User.Management.Data.Migrations
{
    public partial class student_tab_upd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0e98b0a6-f2a5-420d-971e-b47a950857ed");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "425b786a-32e8-4292-b741-66b97f00ec60");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8c7520f0-7b57-4361-8707-0e39fb720ba0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dded6368-6d3f-4aef-a358-3e1cb761f453");

            migrationBuilder.AddColumn<string>(
                name: "StudentName",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "92f96e63-9128-49bb-80f3-97c634213a3b", "3", "Teacher", "Teacher" },
                    { "97035ef3-d8ae-4f7f-9f47-7b5770d2b337", "4", "Student", "Student" },
                    { "b51918d8-ea80-4280-8fd8-49c51a1fae3b", "2", "Sponsor", "Sponsor" },
                    { "fdc3c357-8216-46ab-8ae8-51e0d1ea97a1", "1", "Admin", "Admin" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "92f96e63-9128-49bb-80f3-97c634213a3b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "97035ef3-d8ae-4f7f-9f47-7b5770d2b337");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b51918d8-ea80-4280-8fd8-49c51a1fae3b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fdc3c357-8216-46ab-8ae8-51e0d1ea97a1");

            migrationBuilder.DropColumn(
                name: "StudentName",
                table: "Students");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0e98b0a6-f2a5-420d-971e-b47a950857ed", "3", "Teacher", "Teacher" },
                    { "425b786a-32e8-4292-b741-66b97f00ec60", "4", "Student", "Student" },
                    { "8c7520f0-7b57-4361-8707-0e39fb720ba0", "1", "Admin", "Admin" },
                    { "dded6368-6d3f-4aef-a358-3e1cb761f453", "2", "Sponsor", "Sponsor" }
                });
        }
    }
}
