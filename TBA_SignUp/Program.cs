using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;
using System.Text.Json.Serialization;
using User.Management.Data.Models;
using User.Management.Service.Services;
using User.Management.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost5173", builder =>
    {
        builder.WithOrigins("http://localhost:5173")
               .AllowAnyMethod()
               .AllowAnyHeader()
               .AllowCredentials();
    });
});

//Configuration for Entity Framework (Congig starts here.....)
var configuration = builder.Configuration;
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(configuration.GetConnectionString("ConnStr")));

builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();

//Add Configr for Required Email
builder.Services.Configure<IdentityOptions>(opts => opts.SignIn.RequireConfirmedEmail = true);

builder.Services.Configure<DataProtectionTokenProviderOptions>(opts => opts.TokenLifespan = TimeSpan.FromHours(10));

//Adding JWT Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;

}).AddJwtBearer(options =>
{
    options.SaveToken = true;
    options.RequireHttpsMetadata = false;
    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidAudience = configuration["JWT:ValidAudience"],
        ValidIssuer = configuration["JWT:ValidIssuer"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]))
    };
});
//JWT Till here.........
//.AddCookie(options =>
// {
//     options.LoginPath = "/Account/Login";
//     options.LogoutPath = "/Account/Logout";
//     options.ExpireTimeSpan = TimeSpan.FromMinutes(60);
//     options.SlidingExpiration = true;
//     options.Cookie.HttpOnly = true;
//     options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
//     options.Cookie.SameSite = SameSiteMode.Strict;
// });
//Add email config
var emailConfig = configuration.GetSection("EmailConfiguration").Get<EmailConfiguration>();
builder.Services.AddSingleton(emailConfig);

builder.Services.AddScoped<IEmailService, EmailService>();
builder.Services.AddScoped<IUserManagement, UserManagementService>();
builder.Services.AddScoped<ILookUpCategoryService, LookUpCategoryService>();
builder.Services.AddScoped<ILookUpCategoryDetailService, LookUpCategoryDetailService>();
builder.Services.AddScoped<IStudent, StudentService>();
builder.Services.AddScoped<ITeacherService, TeacherService>();
builder.Services.AddScoped<IMapTeacherSubjectService, MapTeacherSubjectService>();
builder.Services.AddScoped<IMapSponsorStudent, MapSponsorService>();
builder.Services.AddScoped<IAddressService, AddressService>();
builder.Services.AddScoped<IMapClassSubjectTeacherService, MapClassSubjectTeacherService>();
builder.Services.AddScoped<IAddressService, AddressService>();
builder.Services.AddScoped<ISponsor, SponsorService>();
builder.Services.AddScoped<IClassListService, ClassListService>();

// Add services to the container.

builder.Services.AddControllers()

//.AddJsonOptions(options =>
// {
//     options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve;
//     options.JsonSerializerOptions.MaxDepth = 64;  // Optionally increase max depth
// });
 .AddJsonOptions(options =>
 {
     options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve;
 });
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

//Add Swagger Authorize Button
builder.Services.AddSwaggerGen(option =>
{
    option.SwaggerDoc("v1", new OpenApiInfo { Title = "Auth API", Version = "v1" });
    option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please Enter A Valid Token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });
    option.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference= new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id ="Bearer"
                }
            },
            new string[]{}
        }
    });

});

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowLocalhost5173");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
