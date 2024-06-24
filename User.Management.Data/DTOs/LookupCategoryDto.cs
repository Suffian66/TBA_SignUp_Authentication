namespace User.Management.DTOs
{
    public class LookupCategoryDto
    {
        public string Title { get; set; }

        public IEnumerable<string> LookupCategoryDetail { get; set; }
    }
}