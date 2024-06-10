using Microsoft.AspNetCore.Mvc;
using User.Management.Data.Models;
using User.Management.Service.Services;

namespace User.Management.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LookUpCountryController : ControllerBase
    {
        private readonly ILookUpCountryService _lookUpCountryService;

        public LookUpCountryController(ILookUpCountryService lookUpCountryService)
        {
            _lookUpCountryService = lookUpCountryService;
        }

        [HttpGet("countries")]
        public async Task<ActionResult<IEnumerable<LookUpCountry>>> GetAll()
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
    }
}
