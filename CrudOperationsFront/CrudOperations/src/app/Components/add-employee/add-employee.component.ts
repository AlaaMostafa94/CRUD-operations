import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICountry } from 'src/app/Models/icountry';
import { IEmployee } from 'src/app/Models/iemployee';
import { CountryService } from 'src/app/Services/country.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  newEmployee:IEmployee;
  countryList:ICountry[]=[];
  constructor(private employeeService:EmployeeService,private router:Router,private countryService:CountryService) {
    this.newEmployee={empID:0,empName:"",empPhoto:"",empTitle:"",countryID:0,empEmail:"",empSalary:0,
                       empBirthDate:new Date()}
   }

  ngOnInit(): void {

    this.countryService.getAllCountries().subscribe(
      (response)=>{
        this.countryList=response;
     },
      (err)=>{console.error(err)}
    )


  }

  addNewEmployee(){

    
    this.employeeService.addNewEmployee(this.newEmployee).subscribe(
      (response)=>{
        console.log(this.newEmployee)
        this.router.navigateByUrl("/Employees");

      },
     (err)=>{console.log(err)}
    )

  }

}
