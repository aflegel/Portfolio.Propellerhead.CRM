using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Propellerhead.Crm.DataLayer.Context;
using Propellerhead.Crm.DataLayer.Extensions;
using Propellerhead.Crm.DataLayer.Models;

namespace Propellerhead.Crm.DataLayer.Services
{
	public class CustomerService
	{
		private CustomerContext CustomerContext { get; }

		public CustomerService(CustomerContext customerContext) => CustomerContext = customerContext;

		/// <summary>
		/// Returns the customer data in a specific format
		/// </summary>
		private IQueryable<Customer> Customers => CustomerContext.Customers
				.Include(i => i.Notes)
				.Include(i => i.Status);

		public IEnumerable<Customer> Search(IEnumerable<KeyValuePair<string, string>> tokens, string sort)
		{
			var sortPredicate = sort.SortPredicate();

			var inventory = Customers.Where(tokens.SearchPredicate());

			return (sort switch
			{
				"status-descending" => inventory.OrderByDescending(sortPredicate),
				"updated-descending" => inventory.OrderByDescending(sortPredicate),
				"created-descending" => inventory.OrderByDescending(sortPredicate),
				_ => inventory.OrderBy(sortPredicate)
			}).ToList();
		}

		public IEnumerable<Status> Statuses => CustomerContext.Statuses.ToList();

		public Task<Customer> GetById(int id) => Customers
				.FirstOrDefaultAsync(c => c.CustomerId == id);

		public async Task<Customer> Update(Customer customer)
		{
			//update the customer record
			var record = await GetById(customer.CustomerId);

			if (record != null)
			{
				CustomerContext.Entry(record).CurrentValues.SetValues(customer);
				record.Updated = DateTime.Now;

				foreach (var note in customer.Notes)
				{
					await UpdateNote(note);
				}

				await CustomerContext.SaveChangesAsync();

				return record;
			}
			else
			{
				customer.Created = DateTime.Now;

				var newrecord = CustomerContext.Customers.Add(customer);

				await CustomerContext.SaveChangesAsync();

				return newrecord.Entity;
			}
		}

		private async Task UpdateNote(Note note)
		{
			var record = await CustomerContext.Notes.FirstOrDefaultAsync(w => w.NoteId == note.NoteId);

			if (record != null)
			{
				CustomerContext.Entry(record).CurrentValues.SetValues(note);
			}
			else
			{
				//if the note is new, add a created date
				note.Created = DateTime.Now;
				CustomerContext.Notes.Add(note);
			}
		}
	}
}
