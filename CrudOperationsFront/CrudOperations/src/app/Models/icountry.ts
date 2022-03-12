import { IEmployee } from "./iemployee";

export interface ICountry {
    countryID:number;
    countryName:string;
    countryCode:string;
    employees?:IEmployee[]

}
