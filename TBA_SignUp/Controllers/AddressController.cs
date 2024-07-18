using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using User.Management.Data.Dto;
using User.Management.Data.Models;
using User.Management.Services;

namespace User.Management.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly IAddressService _addressService;

        public AddressController(IAddressService addressService)
        {
            _addressService = addressService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AddressDto>>> GetAllAddressesAsync()
        {
            var addresses = await _addressService.GetAllAddressesAsync();
            return Ok(addresses);
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<IEnumerable<AddressStudentDto>>> GetAllStudentAddressesAsync()
        {
            var addresses = await _addressService.GetAllStudentAddressesAsync();
            return Ok(addresses);
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<Address>> GetAddressById(int id)
        {
            var address = await _addressService.GetAddressByIdAsync(id);

            if (address == null)
            {
                return NotFound();
            }

            return Ok(address);
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<StudentAddress>> GetStudentAddressById(int id)
        {
            var address = await _addressService.GetStudentAddressByIdAsync(id);

            if (address == null)
            {
                return NotFound();
            }

            return Ok(address);
        }

        [HttpPost("[action]")]
        public async Task<ActionResult<AddressDto>> CreateAddress(AddressDto address)
        {
            try
            {
                var createdAddress = await _addressService.CreateAddressAsync(address);
                return CreatedAtAction(nameof(GetAddressById), new { id = createdAddress.AddressId }, createdAddress);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("[action]")]
        public async Task<ActionResult<AddressStudentDto>> CreateStudentAddress(AddressStudentDto addressStudent)
        {
            try
            {
                var createdAddress = await _addressService.CreateStudentAddressAsync(addressStudent);
                return CreatedAtAction(nameof(GetStudentAddressById), new { id = createdAddress.StudentAddressId }, createdAddress);
                
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAddress(int id, Address address)
        {
            if (id != address.AddressId)
            {
                return BadRequest();
            }

            try
            {
                await _addressService.UpdateAddressAsync(address);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (await _addressService.GetAddressByIdAsync(id) == null)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAddress(int id)
        {
            var success = await _addressService.DeleteAddressAsync(id);
            if (!success)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
