import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICountry } from 'src/app/Models/icountry';
import { IEmployee } from 'src/app/Models/iemployee';
import { CountryService } from 'src/app/Services/country.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit ,AfterViewInit{
  countryList:ICountry[]=[]
   EmpID=this.activeRoute.snapshot.params['eid'];


employee:IEmployee={countryID:0,empBirthDate:new Date,empEmail:"",empID:0,empName:"",empSalary:0,empTitle:""}
  constructor(private countryService:CountryService ,private activeRoute:ActivatedRoute,private employeeService:EmployeeService,private router:Router) { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(
      (response)=>{
        this.countryList=response;
     },
      (err)=>{console.error(err)}
    )

    // console.log(EmpID)
    this.employeeService.getEmployeeByID(this.EmpID).subscribe(
      (response)=>{
        this.employee=response
      },
      (err)=>{}
    )

  }

  EditEmployee(){

    this.employeeService.editEmployee(this.EmpID,this.employee).subscribe(
      (response)=>{
        console.log(this.employee);
        this.router.navigateByUrl('/Employees')
      },
      (err)=>{}
    );
  }

}
