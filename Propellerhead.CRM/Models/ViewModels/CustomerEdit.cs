namespace PropellerheadCRM.Models.ViewModels
{
	using Newtonsoft.Json;
	using System;
	using System.Collections.Generic;
	using PropellerheadCRM.Models.Customer;
	using System.Linq;
	using System.Text;
	using System.Threading.Tasks;

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
