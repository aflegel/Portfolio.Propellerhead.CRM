namespace PropellerheadCRM.Models.Data
{
	using System;
	using System.Linq;
	using PropellerheadCRM.Models.Customer;
	using Microsoft.EntityFrameworkCore;

	public class CustomerContext : DbContext
	{
		public CustomerContext(DbContextOptions<CustomerContext> options) : base(options)
		{
		}

		public virtual DbSet<Customer> Customers { get; set; }
		public virtual DbSet<Note> Notes { get; set; }
		public virtual DbSet<Status> Statuses { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Note>()
				.HasOne(e => e.Customer)
				.WithMany(c => c.Notes);

			modelBuilder.Entity<Customer>()
				.HasOne(e => e.Status)
				.WithMany(c => c.Customers);
		}
	}
}