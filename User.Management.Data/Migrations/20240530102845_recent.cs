using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace User.Management.Data.Migrations
{
    public partial class recent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0415e5a1-9d94-4508-a328-2dc1c1e95563");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "81c27fff-e270-4d32-b6c6-c47f01b4db08");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a25da84d-9c5c-48cd-a6d7-3cea1d1314ab");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a7b88f77-2512-4adf-9838-4af4c4676388");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "AspNetUsers",
                type: "nvarchar(256)",
                maxLength: 256,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(256)",
                oldMaxLength: 256);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "3e5ff441-9607-47a9-8fbb-93b67198f70d", "4", "Student", "Student" },
                    { "4b289f84-6f1c-42de-9059-9d5f9fcc71be", "1", "Admin", "Admin" },
                    { "8b975db6-c8aa-4e1a-9261-df6aad61d978", "2", "Sponsor", "Sponsor" },
                    { "ecaef754-e610-440c-a627-8303af82dc59", "3", "Teacher", "Teacher" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3e5ff441-9607-47a9-8fbb-93b67198f70d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4b289f84-6f1c-42de-9059-9d5f9fcc71be");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8b975db6-c8aa-4e1a-9261-df6aad61d978");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ecaef754-e610-440c-a627-8303af82dc59");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "AspNetUsers",
                type: "nvarchar(256)",
                maxLength: 256,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(256)",
                oldMaxLength: 256,
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0415e5a1-9d94-4508-a328-2dc1c1e95563", "3", "Teacher", "Teacher" },
                    { "81c27fff-e270-4d32-b6c6-c47f01b4db08", "4", "Student", "Student" },
                    { "a25da84d-9c5c-48cd-a6d7-3cea1d1314ab", "2", "Sponsor", "Sponsor" },
                    { "a7b88f77-2512-4adf-9838-4af4c4676388", "1", "Admin", "Admin" }
                });
        }
    }
}
