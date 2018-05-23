namespace PropellerheadCRM.Models.ViewModels
{
	using Newtonsoft.Json;
	using System;
	using System.Collections.Generic;
	using PropellerheadCRM.Models.Customer;
	using System.Linq;
	using System.Text;
	using System.Threading.Tasks;

	public class CustomerIndex
	{
		public CustomerIndex()
		{
		}

		public IEnumerable<Customer> Customers { get; set; }

		public SearchModel SearchModel { get; set; }
	}
}
