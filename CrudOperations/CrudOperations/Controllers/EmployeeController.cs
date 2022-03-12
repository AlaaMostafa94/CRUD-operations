using CrudOperations.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace CrudOperations.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        ApplicationDbContext context = new ApplicationDbContext();

        public IEnumerable<Employee> GetEmployees()
        {
            IEnumerable<Employee> employees = context.Employees.ToList();
            return employees;
        }


        [HttpGet("{id}")]
        public Employee GetEmployeeByID(int id)
        {
            Employee employee = context.Employees.FirstOrDefault(e => e.EmpID == id);
            return employee;
        }

        [HttpPost]
        public IActionResult Insert(Employee employee,IFormFile file)
        {
            //string fileName;
            //var extension = "." + file.FileName.Split('.')[file.FileName.Split('.').Length - 1];
            //fileName = DateTime.Now.Ticks + extension;
            //var pathBuilt = Path.Combine(Directory.GetCurrentDirectory(), "upload\\images");
            //if (!Directory.Exists(pathBuilt))
            //{
            //    Directory.CreateDirectory(pathBuilt);
            //}
            //var path = Path.Combine(Directory.GetCurrentDirectory(), "upload\\images", fileName);
            //using (var stream = new FileStream(path, FileMode.Create))
            //{
            //    file.CopyTo(stream);
            //}
            if (ModelState.IsValid)
            {
                //employee.EmpPhoto = path;
                context.Employees.Add(employee);
                context.SaveChanges();
                return Created("/Employee/GetEmployeeByID" + employee.EmpID, employee);
            }

            return BadRequest();

        }

        [HttpPut("{id}")]
        public IActionResult Edit(int id,Employee employee)
        {
            if (ModelState.IsValid)
            {
                var OldEmployee = context.Employees.FirstOrDefault(e => e.EmpID == id);
                OldEmployee.CountryID = employee.CountryID;
                OldEmployee.EmpBirthDate = employee.EmpBirthDate;
                OldEmployee.EmpEmail = employee.EmpEmail;
                OldEmployee.EmpName = employee.EmpName;
                OldEmployee.EmpPhoto = employee.EmpPhoto;
                OldEmployee.EmpSalary = employee.EmpSalary;
                OldEmployee.EmpTitle = employee.EmpTitle;
                context.SaveChanges();
                return Ok();

            }

            return BadRequest();

        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var employee = context.Employees.FirstOrDefault(e => e.EmpID == id);
            context.Employees.Remove(employee);
            context.SaveChanges();
            return Ok();
        }
    }
}
