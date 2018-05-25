namespace PropellerheadCRM
{
	using Microsoft.AspNetCore.Builder;
	using Microsoft.AspNetCore.Hosting;
	using Microsoft.EntityFrameworkCore;
	using Microsoft.Extensions.Configuration;
	using Microsoft.Extensions.DependencyInjection;
	using Microsoft.Extensions.FileProviders;
	using Microsoft.Extensions.Logging;
	using PropellerheadCRM.Models.Data;
	using System.IO;

	public class Startup
	{
		public Startup(IHostingEnvironment env)
		{
			var builder = new ConfigurationBuilder()
				.SetBasePath(env.ContentRootPath)
				.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
				.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
				.AddEnvironmentVariables();
			Configuration = builder.Build();
		}

		public IConfigurationRoot Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			// Add framework services.
			services.AddCors();
			services.AddMvc();

			services.AddDbContext<CustomerContext>(options =>
				options.UseSqlServer(Configuration.GetConnectionString("CustomerContext"))
			);
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, CustomerContext context)
		{
			loggerFactory.AddConsole(Configuration.GetSection("Logging"));
			loggerFactory.AddDebug();

			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseBrowserLink();
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
			}

			app.UseCors(builder =>
			{
				builder.WithOrigins("http://localhost:5055");
				builder.AllowAnyHeader();
				builder.AllowAnyMethod();
			});

			app.UseDefaultFiles();

			app.UseMvcWithDefaultRoute();
			app.UseStaticFiles();

			app.UseStaticFiles(new StaticFileOptions
			{
				FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, "node_modules")),
				RequestPath = "/node_modules"
			});

			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller=Home}/{action=Index}/{id?}");

				// in case multiple SPAs required.
				routes.MapSpaFallbackRoute("spa-fallback", new { controller = "home", action = "index" });

			});

			CustomerContextSeed.Initialize(context);
		}
	}
}
