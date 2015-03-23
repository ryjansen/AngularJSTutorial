using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJSTutorial.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]
        public JsonResult ListWebsites()
        {
            var websites = new List<Website>();
            websites.Add(new Website() { Name = "website1", Status = "Running" });
            websites.Add(new Website() { Name = "website2", Status = "Running" });
            websites.Add(new Website() { Name = "website3", Status = "Stopped" });
            websites.Add(new Website() { Name = "website4", Status = "Quota Exceeded" });
            websites.Add(new Website() { Name = "website5", Status = "Warning" });
            return this.Json(websites, JsonRequestBehavior.AllowGet);
        }
    }

    public class Website
    {
        public string Name { get; set; }
        public string Status { get; set; }
    }
}