using Newtonsoft.Json;
using User.Management.Service.Services;

namespace User.Management.Services
{
    public class LookUpCategoryService : ILookUpCategoryService
    {
        private readonly HttpClient _httpClient;

        public LookUpCategoryService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<string>> GetCountriesAsync()
        {
            var response = await _httpClient.GetAsync("https://restcountries.com/v3.1/all");
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            var countries = JsonConvert.DeserializeObject<List<Country>>(content);

            return countries.Select(c => c.Name.Common).ToList();
        }

        private class Country
        {
            public Name Name { get; set; }
        }

        private class Name
        {
            public string Common { get; set; }
        }
    }
}
