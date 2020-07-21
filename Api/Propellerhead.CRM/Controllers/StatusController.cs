using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Propellerhead.Crm.DataLayer.Models;
using Propellerhead.Crm.DataLayer.Services;

namespace Propellerhead.Crm.Controllers
{
	[Route("[controller]")]
	public class StatusController : ControllerBase
	{
		private ICustomerService CustomerService { get; }

		public StatusController(ICustomerService context) => CustomerService = context;

		[HttpGet]
		public ActionResult<IEnumerable<Status>> Get() => Ok(CustomerService.Statuses);
	}
}
