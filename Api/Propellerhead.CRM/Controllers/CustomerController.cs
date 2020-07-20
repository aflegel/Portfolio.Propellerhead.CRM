using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Propellerhead.Crm.DataLayer.Models;
using Propellerhead.Crm.DataLayer.Services;
using Propellerhead.Crm.Extensions;
using Propellerhead.Crm.Models;

namespace Propellerhead.Crm.Controllers
{
	[Route("[controller]")]
	public class CustomerController : ControllerBase
	{
		private ICustomerService CustomerService { get; }

		public CustomerController(ICustomerService context) => CustomerService = context;

		// GET: api/values
		[HttpPost()]
		public ActionResult<IEnumerable<Customer>> Index([FromBody] SearchModel index) => Ok(CustomerService.Search(index.Query.BuildKeywords(), index.Sort));

		/// <summary>
		/// Fetches any matching customer record and the available statuses
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpGet("{id}")]
		public async Task<ActionResult<Customer>> Get(int id) => await CustomerService.GetById(id);

		/// <summary>
		/// Updates a Customer record and all Note records associated
		/// </summary>
		/// <param name="id"></param>
		/// <param name="customer"></param>
		[HttpPut("{id}")]
		public async Task<ActionResult<Customer>> Put(int id, [FromBody] Customer customer)
		{
			customer.Updated = DateTime.Now;

			return await CustomerService.Update(customer);
		}
	}
}
