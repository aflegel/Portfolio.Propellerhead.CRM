namespace PropellerheadCRM.Models.Data
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using PropellerheadCRM.Models.Customer;
	using Microsoft.EntityFrameworkCore;

	public class CustomerContextSeed
	{
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

			context.Customers.AddRange(
				new Customer() { Name = "Azalea", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Begonia", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Cyclamen", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Daisy", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Echinacea", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Foxglove", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Geranium", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Hibiscus", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Impatiens", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Jasmine", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Kalmia", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Lavender", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Magnolia", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Nymphea", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Osteospermum", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Pointsettia", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Quince", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Rose", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Syringa", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Tulip", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Ursinia", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Verbena", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Wisteria", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Xylobium", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Yarrow", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Zephyranthes", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId }
				);

			baseStatus = context.Statuses.FirstOrDefault(f => f.Label == "Non-Active");

			context.Customers.AddRange(
				new Customer() { Name = "Current", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Prospective", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId },
				new Customer() { Name = "Non-Active", Created = DateTime.Now, Updated = DateTime.Now, StatusId = baseStatus.StatusId }
				);

			context.SaveChanges();
		}
	}
}