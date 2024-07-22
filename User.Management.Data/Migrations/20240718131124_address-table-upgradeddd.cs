using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace User.Management.Data.Migrations
{
    public partial class addresstableupgradeddd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "187c8141-5cf6-4f25-b44d-7b0536091fc9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "39e02040-852a-4550-9eb9-4df092bfe82e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b2d7a4eb-d307-49e9-8b55-f044f1f04877");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b42d99e3-39bd-4c3e-8b90-2e42a73d7701");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ccc60097-b472-4262-83c4-9080f1ca5100");

            migrationBuilder.AlterColumn<string>(
                name: "PostalCode",
                table: "Address",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(20)",
                oldMaxLength: 20);

            migrationBuilder.AlterColumn<string>(
                name: "Address2",
                table: "Address",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(255)",
                oldMaxLength: 255);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "53945762-8991-4ace-9aaa-7390a60d4bc0", "3", "Teacher", "Teacher" },
                    { "9a46655c-1323-4472-a33a-6e36cebd010e", "4", "Student", "Student" },
                    { "a3d54f8b-67af-4c9c-8632-50a7aec92486", "5", "AssistanceTeacher", "AssistantTeacher" },
                    { "c5b3bef0-7b50-4941-be78-fb8fd1c3e327", "1", "Admin", "Admin" },
                    { "e3811bef-7f4c-417b-83ad-ca1ca8bb852a", "2", "Sponsor", "Sponsor" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "53945762-8991-4ace-9aaa-7390a60d4bc0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9a46655c-1323-4472-a33a-6e36cebd010e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a3d54f8b-67af-4c9c-8632-50a7aec92486");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c5b3bef0-7b50-4941-be78-fb8fd1c3e327");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e3811bef-7f4c-417b-83ad-ca1ca8bb852a");

            migrationBuilder.AlterColumn<string>(
                name: "PostalCode",
                table: "Address",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(20)",
                oldMaxLength: 20,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Address2",
                table: "Address",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(255)",
                oldMaxLength: 255,
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "187c8141-5cf6-4f25-b44d-7b0536091fc9", "2", "Sponsor", "Sponsor" },
                    { "39e02040-852a-4550-9eb9-4df092bfe82e", "5", "AssistanceTeacher", "AssistantTeacher" },
                    { "b2d7a4eb-d307-49e9-8b55-f044f1f04877", "1", "Admin", "Admin" },
                    { "b42d99e3-39bd-4c3e-8b90-2e42a73d7701", "3", "Teacher", "Teacher" },
                    { "ccc60097-b472-4262-83c4-9080f1ca5100", "4", "Student", "Student" }
                });
        }
    }
}
