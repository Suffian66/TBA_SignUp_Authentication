using Microsoft.AspNetCore.Mvc;
using User.Management.Data.Models;
using User.Management.DTOs;
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

        public async Task<ActionResult> GetAllLookUpCategoryDetailAsync([FromBody] IEnumerable<string> filters)
        {
            try
            {
                var lookupCategories = new List<LookupCategoryDto>();

                if (filters != null && filters.Count() > 0)
                {
                    var filteredCategoryDetails = await _lookUpCategoryDetailService.GetFilteredCategoryDetailAsync(filters);

                    var categoryDto = new LookupCategoryDto();
                    var categoryDetailsList = new List<string>();

                    foreach (var filteredCategoryDetail in filteredCategoryDetails)
                    {

                        categoryDetailsList.Add(filteredCategoryDetail.Title);
                        categoryDto.Title = filteredCategoryDetail.LookUpCategory.Title;
                        categoryDto.LookupCategoryDetail = categoryDetailsList;

                    }

                    lookupCategories.Add(categoryDto);

                }
                else
                {
                    var allCategoriesDetails = await _lookUpCategoryDetailService.GetAllCategoryDetailAsync();

                    foreach (var allCategoriesDetail in allCategoriesDetails)
                    {
                        var categoryDto = new LookupCategoryDto();
                        var categoryDetailsList = new List<string>();

                        categoryDto.Title = allCategoriesDetail.LookUpCategory.Title;

                        categoryDetailsList.Add(allCategoriesDetail.Title);

                        lookupCategories.Add(categoryDto);
                    }
                }

                return Ok(lookupCategories);
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
