using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace User.Management.Data.Migrations
{
    public partial class studentaddressupgraded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
                    { "14e29198-6193-46d0-bcb0-0da2bc6bff68", "1", "Admin", "Admin" },
                    { "6596a2dd-6294-4222-8f99-114f1a646522", "2", "Sponsor", "Sponsor" },
                    { "6ee02a8d-3783-4c85-96e1-cc13de8cffa8", "4", "Student", "Student" },
                    { "98731c5c-091f-413c-96a8-79b692b19ecb", "3", "Teacher", "Teacher" },
                    { "ab092a4a-ab6b-47f3-b81c-df98ead82a00", "5", "AssistanceTeacher", "AssistantTeacher" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
    }
}
