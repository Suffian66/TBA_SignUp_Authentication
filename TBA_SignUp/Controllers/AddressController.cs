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
        private readonly ILookUpCategoryDetailService _lookUpCategoryDetailService;

        public LookUpController(ILookUpCountryService lookUpCountryService, ILookUpCategoryService lookUpCategoryService, ILookUpCategoryDetailService lookUpCategoryDetailService)
        {
            _lookUpCountryService = lookUpCountryService;
            _lookUpCategoryService = lookUpCategoryService;
            _lookUpCategoryDetailService = lookUpCategoryDetailService;
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

        [HttpGet("categorydetail")]

        public async Task<ActionResult<IEnumerable<LookUpCategoryDetail>>> GetAllLookUpCategoryDetailAsync()
        {
            try
            {
                var categoryDetail = await _lookUpCategoryDetailService.GetAllLookUpCategoryDetailAsync();
                return Ok(categoryDetail);
            }
            catch (Exception ex)
            {

                return StatusCode(500, $"Internal Server error: {ex.Message}");
            }
        }

    }
}
