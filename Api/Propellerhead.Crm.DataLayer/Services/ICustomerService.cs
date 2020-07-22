using System.Collections.Generic;
using System.Threading.Tasks;
using Propellerhead.Crm.DataLayer.Models;

namespace Propellerhead.Crm.DataLayer.Services
{
	public interface ICustomerService
	{
		IEnumerable<Status> Statuses { get; }
		IEnumerable<Customer> Search(IEnumerable<KeyValuePair<string, string>> tokens, string sort);
		Task<Customer> GetById(int id);
		Task<Customer> Update(Customer record);
	}
}
