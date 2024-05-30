using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TBA_SignUp.Controllers
{
    [Authorize(Roles ="Admin")]
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        [HttpGet("staff")]

        public IEnumerable<string> Get()
        {
            return new List<string> { "Suffian", "Ali", "Ahsan" };
        }


    }
}
