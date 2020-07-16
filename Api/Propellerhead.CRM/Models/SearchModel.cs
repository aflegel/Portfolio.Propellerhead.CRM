using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using Propellerhead.Crm.DataLayer.Models;

namespace Propellerhead.Crm.Models
{
	public class SearchModel
	{
		/// <summary>
		/// A string to break apart a composed search string into specific term searches
		/// </summary>
		protected const string TokenExpression = @"([a-zA-Z]+:(?:\([^)]+?\)|[^( ]+))";

		/// <summary>
		/// The raw search string unfiltered
		/// </summary>
		public string Query { get; set; }

		/// <summary>
		/// A string to handle ordering
		/// </summary>
		public string Sort { get; set; }

		protected List<KeyValuePair<string, string>> BuildKeywords(string input)
		{
			var keywordTokens = new List<KeyValuePair<string, string>>();

			//fetch any tokens in the format keyword:word or keyword:(multiple words)
			var keywords = Regex.Matches(input, TokenExpression)
								.Cast<Match>()
								.Select(m => m.Value)
								.ToList();

			//remove the previous matches and split out the remaining words or phrases
			var regularWords = Regex.Matches(Regex.Replace(input, TokenExpression, string.Empty).Trim(), @"[\""].+?[\""]|[^ ]+")
								.Cast<Match>()
								.Select(m => m.Value.Replace("\"", string.Empty))
								.ToList();

			//add the words to the return
			foreach (var word in regularWords)
			{
				keywordTokens.Add(new KeyValuePair<string, string>(word, string.Empty));
			}

			//retrieve the inner words and add them to the return
			foreach (var keyword in keywords)
			{
				var split = keyword.IndexOf(":");
				var key = keyword.Substring(0, split);
				var word = keyword.Substring(split + 1);

				//ignore the brackets
				if (word.StartsWith("(") && word.EndsWith(")"))
					word = word[1..^1];

				keywordTokens.Add(new KeyValuePair<string, string>(word, key));
			}

			return keywordTokens;
		}

		/// <summary>
		/// Filters a dataset for each of the search models parameters
		/// </summary>
		/// <param name="customers"></param>
		public void Filter(ref IQueryable<Customer> customers)
		{
			if (string.IsNullOrWhiteSpace(Query))
				return;

			foreach (var token in BuildKeywords(Query))
			{
				if (string.IsNullOrWhiteSpace(token.Value))
				{
					customers = customers.Where(customer =>
						customer.Name.Contains(token.Key) ||
						customer.ContactEmail.Contains(token.Key) ||
						customer.ContactName.Contains(token.Key) ||
						customer.Notes.Any(a => a.Content.Contains(token.Key)) ||
						customer.Status.Label.Contains(token.Key));
				}
				else
				{
					switch (token.Value.ToLower())
					{
						case "name":
							customers = customers.Where(s => s.Name.Contains(token.Key));
							break;
						case "contactemail":
							customers = customers.Where(s => s.ContactEmail.Contains(token.Key));
							break;
						case "contactname":
							customers = customers.Where(s => s.ContactName.Contains(token.Key));
							break;
						case "notes":
							customers = customers.Where(s => s.Notes.Any(a => a.Content.Contains(token.Key)));
							break;
						case "status":
							customers = customers.Where(s => s.Status.Label.Contains(token.Key));
							break;
					}
				}
			}
		}

		/// <summary>
		/// Takes a given sort parameter and orders the customer records
		/// </summary>
		/// <param name="customers"></param>
		public void Order(ref IQueryable<Customer> customers)
		{
			var customerSet = Sort switch
			{
				"name-ascending" => customers.OrderBy(o => o.Name),
				"name-descending" => customers.OrderByDescending(o => o.Name),
				"status-ascending" => customers.OrderBy(o => o.Status.Label),
				"status-descending" => customers.OrderByDescending(o => o.Status.Label),
				"created-ascending" => customers.OrderBy(o => o.Created),
				"created-descending" => customers.OrderByDescending(o => o.Created),
				"updated-ascending" => customers.OrderBy(o => o.Updated),
				"updated-descending" => customers.OrderByDescending(o => o.Updated),
				_ => customers.OrderBy(o => o.Name),
			};
			customers = customerSet.ThenBy(t => t.Name);
		}
	}
}
