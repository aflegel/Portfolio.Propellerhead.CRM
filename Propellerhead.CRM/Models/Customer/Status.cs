namespace PropellerheadCRM.Models.Customer
{
	using Newtonsoft.Json;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Text;
	using System.Threading.Tasks;

	public class Status
	{
		public Status()
		{
			Customers = new HashSet<Customer>();
		}

		/// <summary>
		/// Primary Key
		/// </summary>
		public int StatusId { get; set; }

		public string Label { get; set; }

		[JsonIgnore]
		public ICollection<Customer> Customers { get; set; }
	}
}
