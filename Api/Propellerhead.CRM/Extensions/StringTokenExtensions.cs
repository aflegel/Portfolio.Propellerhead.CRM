using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Propellerhead.Crm.Extensions
{
	public static class StringTokenExtensions
	{
		private const string TokenExpression = @"([a-zA-Z]+:(?:\([^)]+?\)|[^( ]+))";

		/// <summary>
		/// Turns a string into a set of tokens
		/// </summary>
		/// <param name="input"></param>
		/// <returns></returns>
		public static IEnumerable<KeyValuePair<string, string>> BuildKeywords(this string input)
		{
			//fetch any tokens in the format keyword:word or keyword:(multiple words)
			foreach (var keyword in Regex.Matches(input, TokenExpression).Cast<Match>().Select(m => m.Value))
			{
				var split = keyword.IndexOf(":");
				var word = keyword[(split + 1)..^0];

				//ignore the brackets
				if (word.StartsWith("(") && word.EndsWith(")"))
					word = word[1..^1];

				yield return new KeyValuePair<string, string>(word, keyword[0..split]);
			}

			//remove the previous matches and split out the remaining words or phrases
			foreach (var word in Regex.Matches(Regex.Replace(input, TokenExpression, string.Empty).Trim(), @"[\""].+?[\""]|[^ ]+").Cast<Match>().Select(m => m.Value.Replace("\"", string.Empty)))
			{
				yield return new KeyValuePair<string, string>(word, string.Empty);
			}
		}
	}
}
