using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace User.Management.Data.Migrations
{
    public partial class addresstableupdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0e801084-a33e-495e-8c68-cf110b86ad19");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3fd88a91-9cf8-4029-be07-5337cadcf936");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "41208b19-1424-48a3-ab7e-658d6387291c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "50f13d65-55cd-4ed0-af81-af9be2a73fe2");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8e94b915-7c07-47d7-90ab-faaa4eb6b2a1");

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
                    { "0d1ef8c7-a976-4a70-9153-e08052242e09", "1", "Admin", "Admin" },
                    { "a871af10-96a9-45f4-9aea-197bcc659adc", "3", "Teacher", "Teacher" },
                    { "b57490cf-371f-4674-af66-2076ab5c461d", "4", "Student", "Student" },
                    { "e40011a4-9c7d-4123-a95d-d06e29a51fce", "5", "AssistanceTeacher", "AssistantTeacher" },
                    { "f4291592-65bf-42c9-99cc-6d431637147e", "2", "Sponsor", "Sponsor" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
                    { "0e801084-a33e-495e-8c68-cf110b86ad19", "4", "Student", "Student" },
                    { "3fd88a91-9cf8-4029-be07-5337cadcf936", "1", "Admin", "Admin" },
                    { "41208b19-1424-48a3-ab7e-658d6387291c", "5", "AssistanceTeacher", "AssistantTeacher" },
                    { "50f13d65-55cd-4ed0-af81-af9be2a73fe2", "2", "Sponsor", "Sponsor" },
                    { "8e94b915-7c07-47d7-90ab-faaa4eb6b2a1", "3", "Teacher", "Teacher" }
                });
        }
    }
}
