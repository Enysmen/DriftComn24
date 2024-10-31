using DriftComn24.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DriftComn24.Controllers
{
    public class LoginController : Controller
    {
        private readonly ILogger<LoginController> _logger;

        public LoginController(ILogger<LoginController> logger)
        {
            _logger = logger;
        }


        public IActionResult Log_in()
        {
            return View("~/Views/LoginReg/Log_in.cshtml");
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
