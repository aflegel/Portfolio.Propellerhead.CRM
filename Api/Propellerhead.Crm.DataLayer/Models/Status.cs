using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Propellerhead.Crm.DataLayer.Models
{
	public class Status
	{
		public Status() => Customers = new HashSet<Customer>();

		/// <summary>
		/// Primary Key
		/// </summary>
		public int StatusId { get; set; }

		public string Label { get; set; }

		[JsonIgnore]
		public IEnumerable<Customer> Customers { get; set; }
	}
}
