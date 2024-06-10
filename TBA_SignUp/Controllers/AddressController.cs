using Microsoft.AspNetCore.Mvc;
using User.Management.Data.Models;
using User.Management.Service.Services;

namespace User.Management.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LookUpController : ControllerBase
    {
        private readonly ILookUpCountryService _lookUpCountryService;
        private readonly ILookUpCategoryService _lookUpCategoryService;

        public LookUpController(ILookUpCountryService lookUpCountryService, ILookUpCategoryService lookUpCategoryService)
        {
            _lookUpCountryService = lookUpCountryService;
            _lookUpCategoryService = lookUpCategoryService;
        }

        [HttpGet("countries")]
        public async Task<ActionResult<IEnumerable<LookUpCountry>>> GetAllCountries()
        {
            try
            {
                var countries = await _lookUpCountryService.GetAllAsync();
                return Ok(countries);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("categories")]
        public async Task<ActionResult<IEnumerable<LookUpCategory>>> GetAllCategories()
        {
            try
            {
                var categories = await _lookUpCategoryService.GetAllLookUpCategoryAsync();
                return Ok(categories);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
