using DriftComn24.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DriftComn24.Controllers
{
    public class RegController : Controller
    {
            private readonly ILogger<RegController> _logger;

            public RegController(ILogger<RegController> logger)
            {
                _logger = logger;
            }


            public IActionResult Reg_in()
            {
                return View("~/Views/LoginReg/Reg_in.cshtml");
            }


            [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
            public IActionResult Error()
            {
                return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
            }
        
    }
}
