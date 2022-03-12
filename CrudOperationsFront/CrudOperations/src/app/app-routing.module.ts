import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCountryComponent } from './Components/add-country/add-country.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { CountryComponent } from './Components/country/country.component';
import { EditEmployeeComponent } from './Components/edit-employee/edit-employee.component';
import { EmployeeComponent } from './Components/employee/employee.component';

const routes: Routes = [
  {path:"Countries",component:CountryComponent},
  {path:"AddCountry",component:AddCountryComponent},
  {path:"Employees",component:EmployeeComponent},
  {path:"AddEmployee",component:AddEmployeeComponent},
  {path:"EditEmployee/:eid",component:EditEmployeeComponent},
  {path:"",component:EmployeeComponent,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
