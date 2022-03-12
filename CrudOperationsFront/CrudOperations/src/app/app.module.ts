import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/LayoutComponents/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/LayoutComponents/footer/footer.component';
import { CountryComponent } from './Components/country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCountryComponent } from './Components/add-country/add-country.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './Components/employee/employee.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Components/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CountryComponent,
    AddCountryComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
