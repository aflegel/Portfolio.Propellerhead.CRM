namespace PropellerheadCRM.Api
{
	using PropellerheadCRM.Models;
	using PropellerheadCRM.Models.Data;
	using PropellerheadCRM.Models.Customer;
	using AspNet.Security.OAuth.Validation;
	using Microsoft.AspNetCore.Authorization;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.AspNetCore.Mvc;
	using Microsoft.EntityFrameworkCore;
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading.Tasks;
	using PropellerheadCRM.Models.ViewModels;

	[Route("api/[controller]")]
	public class CustomerController : Controller
	{
		private readonly CustomerContext _context;

		public CustomerController(CustomerContext context)
		{
			_context = context;
		}

		// GET: api/values
		[HttpGet("[action]")]
		public CustomerIndex GetIndex(string query)
		{
			var customers = _context.Customers.Where(w => true)
				.Include(i => i.Notes)
				.Include(i => i.Status)
				.OrderBy(o => o.Name).ToList();

			return new CustomerIndex()
			{
				Customers = customers
			};
		}


		[HttpGet("[action]/{id}")]
		public Customer Get(int id)
		{
			var company = _context.Customers.Where(c => c.CustomerId == id)
				.Include(c => c.Notes)
				.Include(i => i.Status)
				.FirstOrDefault();

			return company;
		}

		// POST api/values
		[HttpPost]
		public Customer Post([FromBody]Customer value)
		{
			// it's valid isn't it? TODO: add server-side validation here
			var newTestData = _context.Add(value);
			_context.SaveChanges();
			return newTestData.Entity;
		}

		/// <summary>
		///
		/// </summary>
		/// <param name="id"></param>
		/// <param name="value"></param>
		[HttpPut("[action]/{id}")]
		public Customer Put(int id, [FromBody]Customer value)
		{
			//value.ReconnectChildren();

			_context.Attach(value);

			//value.ModifyCompany(_context);

			_context.SaveChanges();

			return value;
		}
	}
}
