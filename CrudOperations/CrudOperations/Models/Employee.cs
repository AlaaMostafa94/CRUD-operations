using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CrudOperations.Models
{
    public class Employee
    {
        [Key]
        public int EmpID { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "Employee name is required")]
        [MaxLength(50, ErrorMessage = "Maximum length 50 characters")]
        public string EmpName { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "Job title is required")]
        [MaxLength(50, ErrorMessage = "Maximum length 50 characters")]
        public string EmpTitle { get; set; }
        public decimal EmpSalary { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "Email is required")]
        [MaxLength(50, ErrorMessage = "Maximum length 50 characters")]
        public string EmpEmail { get; set; }
        [Column(TypeName ="date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime EmpBirthDate { get; set; }
        public string EmpPhoto { get; set; }
        [ForeignKey("Country")]
        //[Required]
        public int CountryID { get; set; }
        public virtual Country Country { get; set; }
    }
}
