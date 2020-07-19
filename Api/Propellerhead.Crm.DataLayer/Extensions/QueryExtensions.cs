using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Propellerhead.Crm.DataLayer.Models;

namespace Propellerhead.Crm.DataLayer.Extensions
{
	public static class QueryExtensions
	{
		public static Func<Customer, bool> SearchPredicate(this IEnumerable<KeyValuePair<string, string>> tokens) => tokens
				.Select(GetPredicate)
				.Aggregate((current, next) => o => current.Invoke(o) && next.Invoke(o));

		private static Func<Customer, bool> GetPredicate(KeyValuePair<string, string> token) => token.Value.ToLower() switch
		{
			"name" => s => s.Name.Contains(token.Key, StringComparison.OrdinalIgnoreCase),
			"contactemail" => customer => customer.ContactEmail.Contains(token.Key, StringComparison.OrdinalIgnoreCase),
			"contactname" => s => s.ContactName.Contains(token.Key, StringComparison.OrdinalIgnoreCase),
			"status" => s => s.Status.Label.Contains(token.Key, StringComparison.OrdinalIgnoreCase),
			"notes" => s => s.Notes.Any(a => a.Content?.Contains(token.Key, StringComparison.OrdinalIgnoreCase) ?? false),
			_ => customer =>
					customer.Name.Contains(token.Key, StringComparison.OrdinalIgnoreCase) ||
					(customer.ContactEmail?.Contains(token.Key, StringComparison.OrdinalIgnoreCase) ?? false) ||
					(customer.ContactName?.Contains(token.Key, StringComparison.OrdinalIgnoreCase) ?? false) ||
					customer.Notes.Any(a => a.Content?.Contains(token.Key, StringComparison.OrdinalIgnoreCase) ?? false) ||
					customer.Status.Label.Contains(token.Key, StringComparison.OrdinalIgnoreCase)
		};

		public static Func<Customer, object> SortPredicate(this string sort) => sort switch
		{
			"status-ascending" => o => o.Status.Label,
			"status-descending" => o => o.Status.Label,
			"created-ascending" => o => o.Created,
			"created-descending" => o => o.Created,
			"updated-ascending" => o => o.Updated,
			"updated-descending" => o => o.Updated,
			_ => o => o.Name,
		};
	}
}
