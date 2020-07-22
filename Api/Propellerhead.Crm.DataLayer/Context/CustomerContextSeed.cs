using System;
using System.Collections.Generic;
using System.Linq;
using Propellerhead.Crm.DataLayer.Models;

namespace Propellerhead.Crm.DataLayer.Context
{
	public static class CustomerContextSeed
	{
		private static List<string> Names => new List<string>
		{
			"Azalea",
			"Begonia",
			"Cyclamen",
			"Daisy",
			"Echinacea",
			"Foxglove",
			"Geranium",
			"Hibiscus",
			"Impatiens",
			"Jasmine",
			"Kalmia",
			"Lavender",
			"Magnolia",
			"Nymphea",
			"Osteospermum",
			"Pointsettia",
			"Quince",
			"Rose",
			"Syringa",
			"Tulip",
			"Ursinia",
			"Verbena",
			"Wisteria",
			"Xylobium",
			"Yarrow",
			"Zephyranthes"
		};

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
				new Status { Label = "Prospective" },
				new Status { Label = "Current" },
				new Status { Label = "Non-Active" });

			context.SaveChanges();

			var statuses = context.Statuses.ToList();

			var variedDate = Convert.ToDateTime("2017-05-01 09:34:56");
			var random = new Random();

			context.Customers.AddRange(Names.Shuffle().Select(name => new Customer
			{
				Name = name,
				Created = variedDate.AddDays(random.Next(0, 5)),
				Updated = variedDate.AddDays(random.Next(0, 5)).AddHours(random.Next(0, 30)),
				StatusId = statuses[random.Next(statuses.Count)].StatusId
			}));

			context.SaveChanges();
		}

		private static IList<string> Shuffle(this IList<string> list)
		{
			var rng = new Random();
			var position = list.Count;
			while (position > 1)
			{
				var swap = rng.Next(position);
				var value = list[swap];
				list[swap] = list[--position];
				list[position] = value;
			}

			return list;
		}
	}
}
