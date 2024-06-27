using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using User.Management.Data.Dto;
using User.Management.Data.DTOs;
using User.Management.Data.Models;
using User.Management.Service.Services;

namespace TBA_SignUp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SponsorController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ISponsor _sponsor;
        private readonly ApplicationDbContext _context;

        public SponsorController(UserManager<ApplicationUser> userManager, ISponsor sponsor, ApplicationDbContext context)
        {
            _userManager = userManager;
            _sponsor = sponsor;
            _context = context;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetAllSponsors()
        {
            try
            {
                var sponsors = await _sponsor.GetAllSponsors();
                return Ok(sponsors);
            }
            catch (Exception ex)
            {
                // Log the exception details (ex) here for debugging purposes
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<SponsorDto>> GetSponsorById(string sponsorId)
        {
            try
            {
                var sponsor = _sponsor.GetSponsorById(sponsorId);
                if (sponsor == null)
                {
                    return NotFound();
                }
                return Ok(sponsor);
            }
            catch (Exception ex)
            {
                // Log the exception details (ex) here for debugging purposes
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
