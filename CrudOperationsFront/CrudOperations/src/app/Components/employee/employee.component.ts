import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICountry } from 'src/app/Models/icountry';
import { IEmployee } from 'src/app/Models/iemployee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeesList:IEmployee[]=[];
  constructor(private employeeService:EmployeeService,private router:Router) { }
 
  ngOnInit(): void {

    this.employeeService.getAllEmployees().subscribe(
      (response)=>{
        this.employeesList=response;

      },
      (error)=>{}
    )
  };

  DeleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(
      (response)=>{this.router.navigateByUrl("/Employees")},
      (err)=>{}
    )
  }


}
