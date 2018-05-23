namespace PropellerheadCRM.Models.Customer
{
	using Newtonsoft.Json;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Text;
	using System.Threading.Tasks;

	public class Note
	{
		public Note()
		{
		}

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
