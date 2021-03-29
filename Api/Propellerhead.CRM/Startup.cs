using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Propellerhead.Crm.DataLayer;
using Propellerhead.Crm.DataLayer.Context;
using Propellerhead.Crm.DataLayer.Services;

namespace Propellerhead.Crm
{
	public class Startup
	{
		public Startup(IConfiguration configuration) => Configuration = configuration;

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			// Add framework services.
			services.AddCors();
			services.AddMvc();

			services.AddCustomerDatabase();
			services.AddScoped<CustomerService>();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, CustomerContext context)
		{
			app.UseCors(builder =>
			{
				builder.AllowAnyOrigin();
				builder.AllowAnyHeader();
				builder.AllowAnyMethod();
			});

			app.UseDefaultFiles();

			app.UseRouting();

			app.UseEndpoints(endpoints => endpoints.MapControllers());

			context.Initialize();
		}
	}
}
