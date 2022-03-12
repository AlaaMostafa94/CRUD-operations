using CrudOperations.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrudOperations.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class CountryController : ControllerBase
    {
        ApplicationDbContext context = new ApplicationDbContext();

        public IEnumerable<Country> GetCountries()
        {
            IEnumerable<Country> countries = context.Countries.ToList();
            //return Ok(countries);
            return countries;
        }

        [HttpGet("{id}")]
        public Country GetCountryByID(int id)
        {
            Country country = context.Countries.FirstOrDefault(c => c.CountryID == id);
            return country;
        }

        [HttpPost]
        public IActionResult Insert(Country country)
        {
            if (ModelState.IsValid)
            {
                context.Countries.Add(country);
                context.SaveChanges();
                return Created("/Country/GetCountryByID" + country.CountryID, country);
            }
            return BadRequest();

        }

        [HttpPut("{id}")]
        public IActionResult Edit(int id,Country country)
        {
            if (ModelState.IsValid)
            {
                var OldCountry = context.Countries.FirstOrDefault(c => c.CountryID == id);
                OldCountry.CountryName = country.CountryName;
                OldCountry.CountryCode = country.CountryCode;
                context.SaveChanges();
                return Ok();
            }
            return BadRequest();

        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Country country = context.Countries.FirstOrDefault(c => c.CountryID == id);
            context.Countries.Remove(country);
            context.SaveChanges();
            return Ok();
        }
    }
}
