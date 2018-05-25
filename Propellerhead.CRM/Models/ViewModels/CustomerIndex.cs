namespace PropellerheadCRM.Models.ViewModels
{
	using PropellerheadCRM.Models.Customer;
	using System.Collections.Generic;

	public class CustomerIndex
	{
		public CustomerIndex()
		{
			Customers = new HashSet<Customer>();
		}

		/// <summary>
		/// Contains the list of customers to display
		/// </summary>
		public IEnumerable<Customer> Customers { get; set; }

		/// <summary>
		/// Contains the seach parameters
		/// </summary>
		public string Query { get; set; }

		/// <summary>
		/// Contains the sort parameter
		/// </summary>
		public string Sort { get; set; }
	}
}
