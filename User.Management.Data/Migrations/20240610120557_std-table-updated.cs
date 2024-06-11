using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace User.Management.Data.Migrations
{
    public partial class stdtableupdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1f0d3760-7f36-48cf-acf6-0e8833333297");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "346523cf-f6ba-40b0-8aef-d71289722e30");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3d4cdb14-2a02-4f55-9396-61a61c9ae22a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7604c41f-89e2-4799-8453-706fdb39d741");

            migrationBuilder.RenameColumn(
                name: "LastClassAttendent",
                table: "Students",
                newName: "LastClassAttended");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.RenameColumn(
                name: "LastClassAttended",
                table: "Students",
                newName: "LastClassAttendent");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1f0d3760-7f36-48cf-acf6-0e8833333297", "3", "Teacher", "Teacher" },
                    { "346523cf-f6ba-40b0-8aef-d71289722e30", "2", "Sponsor", "Sponsor" },
                    { "3d4cdb14-2a02-4f55-9396-61a61c9ae22a", "4", "Student", "Student" },
                    { "7604c41f-89e2-4799-8453-706fdb39d741", "1", "Admin", "Admin" }
                });
        }
    }
}
