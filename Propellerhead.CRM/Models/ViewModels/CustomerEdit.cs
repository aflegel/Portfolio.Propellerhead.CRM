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
		}

		public Customer Customer { get; set; }

		public ICollection<Status> Statuses { get; set; }
	}
}
