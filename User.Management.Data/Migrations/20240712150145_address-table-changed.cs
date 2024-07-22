using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace User.Management.Data.Migrations
{
    public partial class addresstablechanged : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Address_Students_StudentId",
                table: "Address");

            migrationBuilder.DropIndex(
                name: "IX_Address_StudentId",
                table: "Address");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2467e863-b6f5-4b3f-b32e-8fa7c9452409");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "333189f0-0103-49b7-a84d-27e74dc31715");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5d1d4305-e561-41e2-981b-d3d7a5859140");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "987956f0-cff6-4a66-bcce-d65d6b5e8e5b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e9eaaa11-99d1-462a-af48-370dd029bd09");

            migrationBuilder.DropColumn(
                name: "StudentId",
                table: "Address");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<int>(
                name: "StudentId",
                table: "Address",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2467e863-b6f5-4b3f-b32e-8fa7c9452409", "2", "Sponsor", "Sponsor" },
                    { "333189f0-0103-49b7-a84d-27e74dc31715", "3", "Teacher", "Teacher" },
                    { "5d1d4305-e561-41e2-981b-d3d7a5859140", "1", "Admin", "Admin" },
                    { "987956f0-cff6-4a66-bcce-d65d6b5e8e5b", "5", "AssistanceTeacher", "AssistantTeacher" },
                    { "e9eaaa11-99d1-462a-af48-370dd029bd09", "4", "Student", "Student" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Address_StudentId",
                table: "Address",
                column: "StudentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Address_Students_StudentId",
                table: "Address",
                column: "StudentId",
                principalTable: "Students",
                principalColumn: "StudentId");
        }
    }
}
