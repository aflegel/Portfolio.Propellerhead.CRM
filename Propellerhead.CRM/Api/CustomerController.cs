namespace PropellerheadCRM.Api
{
	using PropellerheadCRM.Models;
	using PropellerheadCRM.Models.Data;
	using PropellerheadCRM.Models.Customer;
	using Microsoft.AspNetCore.Mvc;
	using Microsoft.EntityFrameworkCore;
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading.Tasks;
	using PropellerheadCRM.Models.ViewModels;
	using System;

	[Route("api/[controller]")]
	public class CustomerController : Controller
	{
		private readonly CustomerContext _context;

		public CustomerController(CustomerContext context)
		{
			_context = context;
		}

		// GET: api/values
		[HttpPost("[action]")]
		public CustomerIndex GetIndex([FromBody]CustomerIndex index)
		{
			var customers = GetIndex();

			var search = new SearchModel
			{
				Query = index.Query,
				Sort = index.Sort
			};

			search.Filter(ref customers);
			search.Order(ref customers);

			return new CustomerIndex()
			{
				Customers = customers.ToList(),
				Query = index.Query,
				Sort = index.Sort
			};
		}

		private IQueryable<Customer> GetIndex()
		{
			return _context.Customers
				.Include(i => i.Notes)
				.Include(i => i.Status);
		}


		[HttpGet("[action]/{id}")]
		public CustomerEdit Get(int id)
		{
			var customer = _context.Customers.Where(c => c.CustomerId == id)
				.Include(c => c.Notes)
				.Include(i => i.Status)
				.FirstOrDefault();

			var statuses = _context.Statuses.ToList();

			return new CustomerEdit()
			{
				Customer = customer,
				Statuses = statuses
			};
		}

		// POST api/values
		[HttpPost]
		public CustomerEdit Post([FromBody]Customer customer)
		{
			customer.Created = DateTime.Now;
			customer.Updated = DateTime.Now;

			// it's valid isn't it? TODO: add server-side validation here
			var newTestData = _context.Add(customer);

			_context.SaveChanges();

			var statuses = _context.Statuses.ToList();

			return new CustomerEdit()
			{
				Customer = newTestData.Entity,
				Statuses = statuses
			};
		}

		/// <summary>
		/// Updates a Customer record and all Note records associated
		/// </summary>
		/// <param name="id"></param>
		/// <param name="customer"></param>
		[HttpPut("[action]/{id}")]
		public CustomerEdit Put(int id, [FromBody]Customer customer)
		{
			_context.Attach(customer);

			customer.Updated = DateTime.Now;

			//update the customer record
			if(customer.CustomerId > 0)
			{
				_context.Entry(customer).State = EntityState.Modified;
			}
			else
			{
				customer.Created = DateTime.Now;
			}

			//update each note
			foreach (var note in customer.Notes)
			{
				if (note.NoteId > 0)
				{
					_context.Entry(note).State = EntityState.Modified;
				}
				else
				{
					//if the note is new, add a created date
					note.Created = DateTime.Now;
				}
			}

			_context.SaveChanges();

			//return the customer record.  All new notes will have an id with them.
			return new CustomerEdit()
			{
				Customer = customer,
				Statuses = _context.Statuses.ToList()
			};
		}
	}
}
