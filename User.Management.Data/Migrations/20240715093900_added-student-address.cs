using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace User.Management.Data.Migrations
{
    public partial class addedstudentaddress : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "06929b14-2c00-4b3f-b007-02f3f6260c75");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "08c7e062-3184-4c26-b105-01632a30c6b8");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "10074091-c28d-4c51-931e-fb1eddaf6bab");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2274975c-f2c3-4def-b916-c3cc2c6947d6");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d5a8ae0c-6800-48ff-84bf-36e9ce0f42ba");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "107b7e3e-af93-42b6-b103-5f99235d495d", "3", "Teacher", "Teacher" },
                    { "35e67dcb-36c9-4a5f-8dbd-936c7e667a25", "2", "Sponsor", "Sponsor" },
                    { "8a20948e-83af-4cd0-b072-c208894dcc0d", "5", "AssistanceTeacher", "AssistantTeacher" },
                    { "944171dc-bafa-401b-a100-c15ec4b23dbe", "4", "Student", "Student" },
                    { "b0e59824-afa2-452b-b247-03e51146bdd1", "1", "Admin", "Admin" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "107b7e3e-af93-42b6-b103-5f99235d495d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "35e67dcb-36c9-4a5f-8dbd-936c7e667a25");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8a20948e-83af-4cd0-b072-c208894dcc0d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "944171dc-bafa-401b-a100-c15ec4b23dbe");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b0e59824-afa2-452b-b247-03e51146bdd1");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "06929b14-2c00-4b3f-b007-02f3f6260c75", "4", "Student", "Student" },
                    { "08c7e062-3184-4c26-b105-01632a30c6b8", "3", "Teacher", "Teacher" },
                    { "10074091-c28d-4c51-931e-fb1eddaf6bab", "5", "AssistanceTeacher", "AssistantTeacher" },
                    { "2274975c-f2c3-4def-b916-c3cc2c6947d6", "1", "Admin", "Admin" },
                    { "d5a8ae0c-6800-48ff-84bf-36e9ce0f42ba", "2", "Sponsor", "Sponsor" }
                });
        }
    }
}
