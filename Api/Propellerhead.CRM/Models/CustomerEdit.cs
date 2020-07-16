using System.Collections.Generic;
using Propellerhead.Crm.DataLayer.Models;

namespace Propellerhead.Crm.Models
{
	public class CustomerEdit
	{
		public CustomerEdit() => Statuses = new HashSet<Status>();

		public Customer Customer { get; set; }

		public IEnumerable<Status> Statuses { get; set; }
	}
}
