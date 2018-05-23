namespace PropellerheadCRM.Models.Data
{
	using Microsoft.EntityFrameworkCore;
	using System.Linq;

	public static class DbInitializer
	{
		public static void Initialize(DbContext context)
		{
			context.Database.EnsureCreated();
		}
	}
}
