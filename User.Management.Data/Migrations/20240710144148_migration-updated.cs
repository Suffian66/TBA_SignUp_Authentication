using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace User.Management.Data.Migrations
{
    public partial class migrationupdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "084759d6-954b-477b-ae5b-bb68663db083");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "230cff6e-57b0-4fa6-91bd-705e6bacf2e2");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "28bf4919-ad74-4ff1-9912-0eae62e025b4");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4a53132b-f124-45a1-9881-1f2e4b95cb74");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b69ded71-ed73-47a6-a541-4adc1faf1a93");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "084759d6-954b-477b-ae5b-bb68663db083", "5", "AssistanceTeacher", "AssistantTeacher" },
                    { "230cff6e-57b0-4fa6-91bd-705e6bacf2e2", "4", "Student", "Student" },
                    { "28bf4919-ad74-4ff1-9912-0eae62e025b4", "2", "Sponsor", "Sponsor" },
                    { "4a53132b-f124-45a1-9881-1f2e4b95cb74", "1", "Admin", "Admin" },
                    { "b69ded71-ed73-47a6-a541-4adc1faf1a93", "3", "Teacher", "Teacher" }
                });
        }
    }
}
