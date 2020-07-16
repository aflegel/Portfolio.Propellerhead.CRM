using System;
using System.Linq;
using Propellerhead.Crm.DataLayer.Models;

namespace Propellerhead.Crm.DataLayer.Context
{
	public static class CustomerContextSeed
	{
		public static void Initialize(this CustomerContext context)
		{
			if (context.Database.EnsureCreated())
			{
				SeedData(context);
			}
		}

		/// <summary>
		/// Seeds the database with the required statuses as well as sample customers
		/// </summary>
		/// <param name="context"></param>
		public static void SeedData(CustomerContext context)
		{
			context.Statuses.AddRange(
				new Status() { Label = "Prospective" },
				new Status() { Label = "Current" },
				new Status() { Label = "Non-Active" });

			context.SaveChanges();

			var baseStatus = context.Statuses.FirstOrDefault(f => f.Label == "Current");

			var variedDate = Convert.ToDateTime("2017-05-01 09:34:56");
			var i = 1;
			var j = 1;

			context.Customers.AddRange(
				new Customer() { Name = "Azalea", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Begonia", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Cyclamen", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Daisy", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Echinacea", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Foxglove", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Geranium", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Hibiscus", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Impatiens", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Jasmine", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Kalmia", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Lavender", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Magnolia", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Nymphea", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Osteospermum", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Pointsettia", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Quince", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Rose", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Syringa", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Tulip", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Ursinia", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Verbena", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Wisteria", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Xylobium", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Yarrow", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Zephyranthes", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId }
				);

			baseStatus = context.Statuses.FirstOrDefault(f => f.Label == "Non-Active");

			context.Customers.AddRange(
				new Customer() { Name = "Current", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Prospective", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId },
				new Customer() { Name = "Non-Active", Created = variedDate.AddDays(i++), Updated = variedDate.AddDays(i).AddHours(j++), StatusId = baseStatus.StatusId }
				);

			context.SaveChanges();
		}
	}
}
