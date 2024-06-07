using Microsoft.AspNetCore.Mvc;
using User.Management.Data.Models;
using User.Management.Service.Services;

namespace User.Management.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AddressController : ControllerBase
    {
        private readonly ILookUpCategoryService _lookUpCategoryService;
        private readonly ApplicationDbContext _context;

        public AddressController(ILookUpCategoryService lookUpCategoryService, ApplicationDbContext context)
        {
            _lookUpCategoryService = lookUpCategoryService;
            _context = context;
        }

        [HttpGet("countries")]
        public async Task<IActionResult> GetCountries()
        {
            var countries = await _lookUpCategoryService.GetCountriesAsync();
            return Ok(countries);
        }

        [HttpPost]
        public async Task<IActionResult> PostAddress([FromBody] Address address)
        {
            if (address == null)
            {
                return BadRequest();
            }

            _context.Address.Add(address);
            await _context.SaveChangesAsync();

            return Ok(address);
        }

        // Other CRUD actions for Address (Create, Read, Update, Delete)
    }
}
