using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Propellerhead.Crm.DataLayer.Models;
using Propellerhead.Crm.DataLayer.Services;

namespace Propellerhead.Crm.Controllers
{
	[Route("[controller]")]
	public class StatusController : ControllerBase
	{
		private CustomerService CustomerService { get; }

		public StatusController(CustomerService context) => CustomerService = context;

		[HttpGet]
		public ActionResult<IEnumerable<Status>> Get() => Ok(CustomerService.Statuses);
	}
}
