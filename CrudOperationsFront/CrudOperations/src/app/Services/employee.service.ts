import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmployee } from '../Models/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  getAllEmployees():Observable<IEmployee[]>{
    return this.httpClient.get<IEmployee[]>(`${environment.API_URL}/api/Employee`);
  }


  addNewEmployee(newEmployee:IEmployee){
    newEmployee.countryID=Number(newEmployee.countryID);
    return this.httpClient.post(`${environment.API_URL}/api/Employee`,newEmployee);
  }

  getEmployeeByID(eID:number):Observable<IEmployee>{
    return this.httpClient.get<IEmployee>(`${environment.API_URL}/api/Employee/${eID}`);
    }

  editEmployee(eID:number,newEmployee:IEmployee):Observable<IEmployee>{
    newEmployee.countryID=Number(newEmployee.countryID);
    return this.httpClient.put<IEmployee>(`${environment.API_URL}/api/Employee/${eID}`,newEmployee);
  }

  deleteEmployee(eID:number){
    return this.httpClient.delete(`${environment.API_URL}/api/Employee/${eID}`)
  }
}
