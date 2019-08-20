using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPIService.Models;

namespace WebAPIService.Controllers
{
    public class EmployeeController : ApiController
    {
        EmployeeEntities2 employeeEntities2 = new EmployeeEntities2();

        // GET api/<controller>
        public IEnumerable<Employee> Get()
        {

            return employeeEntities2.Employees.ToList();
        }

        // GET api/<controller>/5
        public Employee Get(string id)
        {
            return employeeEntities2.Employees.FirstOrDefault(x => x.Code == id);
        }

        // POST api/<controller>
        public void Post(Employee employee)
        {
            employeeEntities2.Employees.Add(employee);
            employeeEntities2.SaveChanges();
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}