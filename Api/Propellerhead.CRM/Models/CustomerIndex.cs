using System.Collections.Generic;
using Propellerhead.Crm.DataLayer.Models;

namespace Propellerhead.Crm.Models
{
	public class CustomerIndex
	{
		public CustomerIndex() => Customers = new HashSet<Customer>();

		public IEnumerable<Customer> Customers { get; set; }

		/// <summary>
		/// Contains the seach parameters
		/// </summary>
		public string Query { get; set; }

		public string Sort { get; set; }
	}
}
