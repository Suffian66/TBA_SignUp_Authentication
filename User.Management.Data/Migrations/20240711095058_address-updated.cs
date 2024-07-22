using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace User.Management.Data.Migrations
{
    public partial class addressupdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "09d29af9-1f2b-4bbc-8313-d5504831378b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "37445789-bf49-4898-9c3e-893c5accbc02");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5c5cdf47-0172-4c7b-973b-9c9d79b373ab");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "841a3d25-68c5-4a1b-bd46-44627c4f8661");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8aafd127-5312-4873-ab21-d40121547f31");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedDate",
                table: "Address",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<int>(
                name: "UpdatedBy",
                table: "Address",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "PostalCode",
                table: "Address",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(20)",
                oldMaxLength: 20);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "Address",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<int>(
                name: "CreatedBy",
                table: "Address",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedDate",
                table: "Address",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UpdatedBy",
                table: "Address",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

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

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "Address",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CreatedBy",
                table: "Address",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
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
                    { "09d29af9-1f2b-4bbc-8313-d5504831378b", "4", "Student", "Student" },
                    { "37445789-bf49-4898-9c3e-893c5accbc02", "1", "Admin", "Admin" },
                    { "5c5cdf47-0172-4c7b-973b-9c9d79b373ab", "2", "Sponsor", "Sponsor" },
                    { "841a3d25-68c5-4a1b-bd46-44627c4f8661", "3", "Teacher", "Teacher" },
                    { "8aafd127-5312-4873-ab21-d40121547f31", "5", "AssistanceTeacher", "AssistantTeacher" }
                });
        }
    }
}
