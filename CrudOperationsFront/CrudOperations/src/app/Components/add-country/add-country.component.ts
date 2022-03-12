import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICountry } from 'src/app/Models/icountry';
import { CountryService } from 'src/app/Services/country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
newCountry:ICountry;
  constructor(private countryService:CountryService,private router:Router) {
this.newCountry={countryID:0,countryName:"",countryCode:""}
   }

  ngOnInit(): void {

  }
  addNewCountry(){
    this.countryService.AddCountry(this.newCountry).subscribe(
      (response)=>{
        this.router.navigateByUrl("/Countries");
      },
      (err)=>{}
    )
  }

}
