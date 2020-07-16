using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Propellerhead.Crm.DataLayer.Context;

namespace Propellerhead.Crm.DataLayer
{
	public static class StartupExtensions
	{
		public static IServiceCollection AddCustomerDatabase(this IServiceCollection services) =>
			services.AddDbContext<CustomerContext>(options => options.UseInMemoryDatabase(databaseName: "CustomerContext"));
	}
}
