namespace User.Management.Service.Services
{
    public interface ILookUpCategoryService
    {
        Task<List<string>> GetCountriesAsync();
    }
}
