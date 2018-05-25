namespace PropellerheadCRM.Models.ViewModels
{
	using PropellerheadCRM.Models.Customer;
	using System.Collections.Generic;

	public class CustomerEdit
	{
		public CustomerEdit()
		{
			Statuses = new HashSet<Status>();
		}

		public Customer Customer { get; set; }

		/// <summary>
		/// A set of statuses for the customer records
		/// </summary>
		public ICollection<Status> Statuses { get; set; }
	}
}
