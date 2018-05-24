namespace PropellerheadCRM.Models.Customer
{
	using Newtonsoft.Json;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Text;
	using System.Threading.Tasks;

	public class Customer
	{
		public Customer()
		{
			Notes = new HashSet<Note>();
		}

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

		public ICollection<Note> Notes { get; set; }
		public Status Status { get; set; }
	}
}
