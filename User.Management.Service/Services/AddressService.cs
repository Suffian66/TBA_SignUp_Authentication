﻿using Microsoft.EntityFrameworkCore;
using User.Management.Data.Models;

namespace User.Management.Services
{
    public class AddressService : IAddressService
    {
        private readonly ApplicationDbContext _context;

        public AddressService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Address>> GetAllAddressesAsync()
        {
            return await _context.Address.ToListAsync();
        }

        public async Task<Address> GetAddressByIdAsync(int id)
        {
            return await _context.Address.FindAsync(id);
        }

        public async Task<Address> CreateAddressAsync(Address address)
        {
            _context.Address.Add(address);
            await _context.SaveChangesAsync();
            return address;
        }

        public async Task<Address> UpdateAddressAsync(Address address)
        {
            _context.Entry(address).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return address;
        }

        public async Task<bool> DeleteAddressAsync(int id)
        {
            var address = await _context.Address.FindAsync(id);
            if (address == null)
            {
                return false;
            }

            _context.Address.Remove(address);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
