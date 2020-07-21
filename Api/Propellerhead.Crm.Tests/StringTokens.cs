using System.Linq;
using FluentAssertions;
using Propellerhead.Crm.Extensions;
using Xunit;

namespace Propellerhead.Crm.Tests
{
	public class StringTokens
    {
		[Theory]
		[InlineData("three word string", 3)]
		[InlineData(" \"three word string\"", 1)]
		[InlineData("context:one", 1)]
		[InlineData("context:(two or more)", 1)]
		[InlineData("context:(two or more) context:mixed", 2)]
		[InlineData("context:(two or more) context:mixed with extra", 4)]
		[InlineData("", 0)]
		public void ShouldTokenizeProperly(string query, int tokenCount) => query.BuildKeywords().Should().HaveCount(tokenCount);


		[Theory]
		[InlineData("context:term", "term")]
		[InlineData("context:(multiple words)", "multiple words")]
		[InlineData("context", "context")]
		[InlineData("\"context multiple\"", "context multiple")]
		public void ShouldContainContextualData(string query, string context) => query.BuildKeywords().First().Key.Should().Be(context);
	}
}
