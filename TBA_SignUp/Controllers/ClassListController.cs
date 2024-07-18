
using Microsoft.AspNetCore.Mvc;
using User.Management.Data.DTOs;
using User.Management.Service.Services;


namespace TBA_SMS.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassListController : ControllerBase
    {
        private readonly IClassListService _classService;
        private readonly ILogger<ClassListController> _logger;

        public ClassListController(IClassListService classService, ILogger<ClassListController> logger)
        {
            _classService = classService;
            _logger = logger;
        }
        [HttpGet]
        public async Task<ActionResult<List<GetClassListDto>>> GetClassList()
        {
            try
            {
                var classList = await _classService.GetClassListAsync();
                return Ok(classList);

            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<List<StudentListDto>>> GetStudentsByClassName(string className)
        {
            try
            {
                var students = await _classService.GetStudentsByClassNameAsync(className);
                return Ok(students);

            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}


