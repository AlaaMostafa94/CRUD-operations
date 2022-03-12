import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICountry } from '../../Models/icountry';
import { CountryService } from '../../Services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countryList: ICountry[]=[];
  constructor(private countryService:CountryService,private router:Router) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(
      (response)=>{
        this.countryList=response;
      },
      (err)=>{}
    )
  }

}
