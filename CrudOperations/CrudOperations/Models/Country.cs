using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CrudOperations.Models
{
    public class Country
    {
        [Key]
        public int CountryID { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "Country name is required")]
        [MaxLength(50, ErrorMessage = "Maximum length 50 characters")]
        public string CountryName { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "Country code is required")]
        [MaxLength(2, ErrorMessage = "Maximum length 2 characters")]
        public string CountryCode { get; set; }
        public virtual ICollection<Employee> Employees { get; set; }
    }
}
