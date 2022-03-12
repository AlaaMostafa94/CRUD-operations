import { ICountry } from "./icountry";

export interface IEmployee {
    empID:number;
    empName:string;
    empTitle:string;
    empSalary:number;
    empEmail:string;
    empBirthDate:Date;
    empPhoto?:string;
    countryID:number;
    country?:ICountry;
}
