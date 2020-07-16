using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Propellerhead.Crm.DataLayer.Models;
using Propellerhead.Crm.DataLayer.Services;
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
		public ActionResult<CustomerIndex> GetIndex([FromBody] CustomerIndex index)
		{
			var customers = CustomerService.Customers;

			var search = new SearchModel
			{
				Query = index.Query,
				Sort = index.Sort
			};

			//search.Filter(ref customers);
			//search.Order(ref customers);

			return new CustomerIndex()
			{
				Customers = customers.ToList(),
				Query = index.Query,
				Sort = index.Sort
			};
		}

		/// <summary>
		/// Fetches any matching customer record and the available statuses
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpGet("{id}")]
		public ActionResult<CustomerEdit> Get(int id) => new CustomerEdit
		{
			Customer = CustomerService.GetById(id),
			Statuses = CustomerService.Statuses
		};

		/// <summary>
		/// Updates a Customer record and all Note records associated
		/// </summary>
		/// <param name="id"></param>
		/// <param name="customer"></param>
		[HttpPut("{id}")]
		public CustomerEdit Put(int _, [FromBody] Customer customer) => new CustomerEdit
		{
			Customer = CustomerService.Update(customer),
			Statuses = CustomerService.Statuses
		};
	}
}
