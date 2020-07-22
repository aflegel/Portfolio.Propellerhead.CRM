using System;
using System.Collections.Generic;

namespace Propellerhead.Crm.DataLayer.Models
{
	public class Customer
	{
		public Customer() => Notes = new HashSet<Note>();

		/// <summary>
		/// Primary Key
		/// </summary>
		public int CustomerId { get; set; }
		public int StatusId { get; set; }

		public string Name { get; set; }
		public string ContactName { get; set; }
		public string ContactEmail { get; set; }
		public DateTime Created { get; set; }
		public DateTime Updated { get; set; }

		public IEnumerable<Note> Notes { get; set; }
		public Status Status { get; set; }
	}
}
