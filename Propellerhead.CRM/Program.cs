using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore;
using Microsoft.Extensions.Configuration;

using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Logging;

namespace PropellerheadCRM
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var configuration = new ConfigurationBuilder()
							.AddEnvironmentVariables()
							.AddCommandLine(args)
							.Build();

			var host = new WebHostBuilder()
				.ConfigureLogging(options => options.AddConsole())
				.ConfigureLogging(options => options.AddDebug())
				.UseConfiguration(configuration)
				.UseContentRoot(Directory.GetCurrentDirectory())
				.UseIISIntegration()
				.UseKestrel()
				.UseStartup<Startup>()
				.Build();           // do fun things

			host.Run();
		}

		public static IWebHost BuildWebHost(string[] args) =>
			WebHost.CreateDefaultBuilder(args)
				.UseStartup<Startup>()
				.Build();
	}
}
