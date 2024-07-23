using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace User.Management.Data.Migrations
{
    public partial class studentaddresstableupdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "14e29198-6193-46d0-bcb0-0da2bc6bff68");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6596a2dd-6294-4222-8f99-114f1a646522");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6ee02a8d-3783-4c85-96e1-cc13de8cffa8");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "98731c5c-091f-413c-96a8-79b692b19ecb");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ab092a4a-ab6b-47f3-b81c-df98ead82a00");

            migrationBuilder.CreateTable(
                name: "StudentAddress",
                columns: table => new
                {
                    StudentAddressId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AddressPrimary = table.Column<bool>(type: "bit", nullable: false),
                    Address1 = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Address2 = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    City = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    State = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    PostalCode = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    CreatedBy = table.Column<int>(type: "int", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    UpdatedBy = table.Column<int>(type: "int", nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    StudentId = table.Column<int>(type: "int", nullable: false),
                    CountryId = table.Column<int>(type: "int", nullable: true),
                    AddressTypeId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentAddress", x => x.StudentAddressId);
                    table.ForeignKey(
                        name: "FK_StudentAddress_LookupsCategoryDetail_AddressTypeId",
                        column: x => x.AddressTypeId,
                        principalTable: "LookupsCategoryDetail",
                        principalColumn: "LookUpCtgDetailId");
                    table.ForeignKey(
                        name: "FK_StudentAddress_LookupsCategoryDetail_CountryId",
                        column: x => x.CountryId,
                        principalTable: "LookupsCategoryDetail",
                        principalColumn: "LookUpCtgDetailId");
                    table.ForeignKey(
                        name: "FK_StudentAddress_Students_StudentId",
                        column: x => x.StudentId,
                        principalTable: "Students",
                        principalColumn: "StudentId");
                });

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

            migrationBuilder.CreateIndex(
                name: "IX_StudentAddress_AddressTypeId",
                table: "StudentAddress",
                column: "AddressTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_StudentAddress_CountryId",
                table: "StudentAddress",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_StudentAddress_StudentId",
                table: "StudentAddress",
                column: "StudentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StudentAddress");

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

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "14e29198-6193-46d0-bcb0-0da2bc6bff68", "1", "Admin", "Admin" },
                    { "6596a2dd-6294-4222-8f99-114f1a646522", "2", "Sponsor", "Sponsor" },
                    { "6ee02a8d-3783-4c85-96e1-cc13de8cffa8", "4", "Student", "Student" },
                    { "98731c5c-091f-413c-96a8-79b692b19ecb", "3", "Teacher", "Teacher" },
                    { "ab092a4a-ab6b-47f3-b81c-df98ead82a00", "5", "AssistanceTeacher", "AssistantTeacher" }
                });
        }
    }
}
