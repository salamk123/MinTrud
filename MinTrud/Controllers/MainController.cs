using Microsoft.AspNetCore.Mvc;

namespace MinTrud.Controllers
{
	public class MainController : Controller
	{
		public IActionResult Main()
		{
			return View();
		}
		public IActionResult Index()
		{
			return View();
		}

        public IActionResult NewPage()
        {
            return View();
        }

        public IActionResult Ministry()
        {
            return View();
        }
    }
}
