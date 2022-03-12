import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICountry } from '../Models/icountry';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient:HttpClient) { }
  getAllCountries():Observable<ICountry[]>{
    return this.httpClient.get<ICountry[]>(`${environment.API_URL}/api/Country`);
  }

  AddCountry(country:ICountry){
    return this.httpClient.post(`${environment.API_URL}/api/Country`,country);
  }
}
