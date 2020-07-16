using System.Collections.Generic;
using System.Linq;
using Propellerhead.Crm.DataLayer.Models;

namespace Propellerhead.Crm.DataLayer.Services
{
	public interface ICustomerService
	{
		IQueryable<Customer> Customers { get; }
		IEnumerable<Status> Statuses { get; }
		Customer GetById(int id);
		Customer Update(Customer record);
	}
}
