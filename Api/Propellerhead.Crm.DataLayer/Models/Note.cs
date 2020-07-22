using System;
using System.Text.Json.Serialization;

namespace Propellerhead.Crm.DataLayer.Models
{
	public class Note
	{
		/// <summary>
		/// Primary Key
		/// </summary>
		public int NoteId { get; set; }
		public int CustomerId { get; set; }

		public string Content { get; set; }
		public DateTime Created { get; set; }

		[JsonIgnore]
		public Customer Customer { get; set; }
	}
}
