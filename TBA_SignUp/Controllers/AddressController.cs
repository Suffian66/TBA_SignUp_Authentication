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

        [HttpGet("Categoryid")]
        public async Task<ActionResult<LookUpCategory>> GetLookUpCategoryById(int id)
        {
            try
            {
                var category = await _lookUpCategoryService.GetLookUpCategoryByIdAsync(id);
                return Ok(category);
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
            catch (ApplicationException ex)
            {

                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("categorydetail")]

        public async Task<ActionResult<IEnumerable<LookUpCategoryDetail>>> GetAllLookUpCategoryDetailAsync([FromBody] IEnumerable<string> filters)
        {
            try
            {
                IEnumerable<LookUpCategoryDetail> categoryDetail;

                if (filters != null && filters.Count() > 0)
                {
                    categoryDetail = await _lookUpCategoryDetailService.GetFilteredCategoryDetailAsync(filters);
                }
                else
                {
                    categoryDetail = await _lookUpCategoryDetailService.GetAllCategoryDetailAsync();
                }

                return Ok(categoryDetail);
            }
            catch (Exception ex)
            {

                return StatusCode(500, $"Internal Server error: {ex.Message}");
            }
        }

        [HttpGet("categorydetail/{categoryId}")]
        public async Task<ActionResult<IEnumerable<LookUpCategoryDetail>>> GetLookUpCategoryDetailsByCategoryId(int categoryId)
        {
            try
            {
                var details = await _lookUpCategoryDetailService.GetLookUpCategoryDetailsByCategoryIdAsync(categoryId);
                return Ok(details);
            }
            catch (ApplicationException ex)
            {

                return StatusCode(500, ex.Message);
            }
        }

    }
}
