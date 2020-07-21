using Microsoft.EntityFrameworkCore;
using Propellerhead.Crm.DataLayer.Models;

namespace Propellerhead.Crm.DataLayer.Context
{
	public class CustomerContext : DbContext
	{
		public CustomerContext(DbContextOptions<CustomerContext> options) : base(options) { }

		public virtual DbSet<Customer> Customers { get; set; }
		public virtual DbSet<Note> Notes { get; set; }
		public virtual DbSet<Status> Statuses { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Customer>()
				.HasMany(e => e.Notes)
				.WithOne(c => c.Customer);

			modelBuilder.Entity<Customer>()
				.HasOne(e => e.Status)
				.WithMany(c => c.Customers);
		}
	}
}
