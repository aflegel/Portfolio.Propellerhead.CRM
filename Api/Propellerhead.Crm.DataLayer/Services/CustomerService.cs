using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Propellerhead.Crm.DataLayer.Context;
using Propellerhead.Crm.DataLayer.Extensions;
using Propellerhead.Crm.DataLayer.Models;

namespace Propellerhead.Crm.DataLayer.Services
{
	public class CustomerService : ICustomerService
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

		public Customer GetById(int id) => Customers
			.Where(c => c.CustomerId == id)
				.FirstOrDefault();

		public Customer Update(Customer record)
		{
			CustomerContext.Attach(record);

			record.Updated = DateTime.Now;

			//update the customer record
			if (record.CustomerId > 0)
			{
				CustomerContext.Entry(record).State = EntityState.Modified;
			}
			else
			{
				record.Created = DateTime.Now;
			}

			//update each note
			foreach (var note in record.Notes)
			{
				if (note.NoteId > 0)
				{
					CustomerContext.Entry(note).State = EntityState.Modified;
				}
				else
				{
					//if the note is new, add a created date
					note.Created = DateTime.Now;
				}
			}

			CustomerContext.SaveChanges();

			return record;
		}
	}
}
