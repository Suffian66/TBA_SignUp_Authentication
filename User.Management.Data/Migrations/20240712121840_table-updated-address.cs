using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace User.Management.Data.Migrations
{
    public partial class tableupdatedaddress : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2ab16096-f350-4e00-9454-0ffeaeff66a0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "37c70c6b-168b-48f7-9a30-0a43328a6727");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6218169b-e80b-4709-b35e-5bf910592ab4");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "eab7cf9b-ec71-4463-8b0b-d1dff3a67097");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ec084e36-348d-4bec-a428-938497b665fe");

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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2ab16096-f350-4e00-9454-0ffeaeff66a0", "5", "AssistanceTeacher", "AssistantTeacher" },
                    { "37c70c6b-168b-48f7-9a30-0a43328a6727", "1", "Admin", "Admin" },
                    { "6218169b-e80b-4709-b35e-5bf910592ab4", "3", "Teacher", "Teacher" },
                    { "eab7cf9b-ec71-4463-8b0b-d1dff3a67097", "2", "Sponsor", "Sponsor" },
                    { "ec084e36-348d-4bec-a428-938497b665fe", "4", "Student", "Student" }
                });
        }
    }
}
