using System.Collections.Generic;
using System.Linq;
using Propellerhead.Crm.DataLayer.Models;

namespace Propellerhead.Crm.DataLayer.Services
{
	public interface ICustomerService
	{
		IEnumerable<Status> Statuses { get; }
		IEnumerable<Customer> Search(IEnumerable<KeyValuePair<string, string>> tokens, string sort);
		Customer GetById(int id);
		Customer Update(Customer record);
	}
}
