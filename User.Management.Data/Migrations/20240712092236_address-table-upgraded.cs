using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace User.Management.Data.Migrations
{
    public partial class addresstableupgraded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0d1ef8c7-a976-4a70-9153-e08052242e09");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a871af10-96a9-45f4-9aea-197bcc659adc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b57490cf-371f-4674-af66-2076ab5c461d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e40011a4-9c7d-4123-a95d-d06e29a51fce");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f4291592-65bf-42c9-99cc-6d431637147e");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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
                    { "0d1ef8c7-a976-4a70-9153-e08052242e09", "1", "Admin", "Admin" },
                    { "a871af10-96a9-45f4-9aea-197bcc659adc", "3", "Teacher", "Teacher" },
                    { "b57490cf-371f-4674-af66-2076ab5c461d", "4", "Student", "Student" },
                    { "e40011a4-9c7d-4123-a95d-d06e29a51fce", "5", "AssistanceTeacher", "AssistantTeacher" },
                    { "f4291592-65bf-42c9-99cc-6d431637147e", "2", "Sponsor", "Sponsor" }
                });
        }
    }
}
