namespace PropellerheadCRM.Models.ViewModels
{
	using Microsoft.AspNetCore.Routing;
	using System;
	using PropellerheadCRM.Models.Customer;
	using System.Collections.Generic;
	using System.Linq;
	using System.Text.RegularExpressions;
	using System.Threading.Tasks;

	public class SearchModel
	{
		/// <summary>
		/// A string to break apart a composed search string into specific term searches
		/// </summary>
		public const string TokenExpression = @"([a-zA-Z]+:(?:\([^)]+?\)|[^( ]+))";

		/// <summary>
		/// The raw search string unfiltered
		/// </summary>
		public string Query { get; set; }

		public virtual RouteValueDictionary RouteValues
		{
			get { return new RouteValueDictionary { [nameof(Query)] = Query }; }
		}

		/// <summary>
		/// An enum to handle which column is the primary sort
		/// </summary>
		public enum Sort
		{
			NameAscending,
			NameDescending,
			CollectionAscending,
			CollectionDescending
		}

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
					word = word.Substring(1, word.Length - 2);

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
				else if (token.Value.ToLower() == "name")
				{
					customers = customers.Where(s => s.Name.Contains(token.Key));
				}
				else if (token.Value.ToLower() == "contactemail")
				{
					customers = customers.Where(s => s.ContactEmail.Contains(token.Key));
				}
				else if (token.Value.ToLower() == "contactname")
				{
					customers = customers.Where(s => s.ContactName.Contains(token.Key));
				}
				else if (token.Value.ToLower() == "notes")
				{
					customers = customers.Where(s => s.Notes.Any(a => a.Content.Contains(token.Key)));
				}
				else if (token.Value.ToLower() == "status")
				{
					customers = customers.Where(s => s.Status.Label.Contains(token.Key));
				}
			}
		}
	}
}
