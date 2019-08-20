import { Injectable } from '@angular/core';
import { Http,Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { IEmployee } from './IEmployee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// Below attribute is used to inject it's dependencies 
@Injectable()
export class employeeService {

    constructor(private _http : Http) {

    }

    getEmployeeList():Observable<IEmployee[]> {
        //return [
        //    { Code: "emp101", Name: "Nagendra", Gender: "Male", Age: 30, DOB: "09/16/1988", Salary: 11000.784 },
        //    { Code: "emp102", Name: "Gargi", Gender: "Female", Age: 1, DOB: "08/26/2018", Salary: 15000 },
        //    { Code: "emp103", Name: "Teja", Gender: "Female", Age: 30, DOB: "02/28/1989", Salary: 20000.8897 },
        //    { Code: "emp104", Name: "VenkateswaraRao", Gender: "Male", Age: 60, DOB: "02/28/1960", Salary: 25000.111 },
        //    { Code: "emp105", Name: "VenkateswaraRao", Gender: "Male", Age: 60, DOB: "02/28/1960", Salary: 25000.111 }
        //]

        return this._http.get('http://localhost:60583/api/Employee')
            .map((resonse: Response) => <IEmployee[]>resonse.json())
            .catch(this.errorCallBack);
    }


    getEmployee(code: string): Observable<IEmployee> {
        return this._http.get('http://localhost:60583/api/Employee/' + code)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.errorCallBack);
    }


    createEmployee(employee: IEmployee) {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: myHeaders });
        options.method = RequestMethod.Post;
       return this._http.post("http://localhost:60583/api/Employee", JSON.stringify(employee), options)
            .map((res: Response) => { return res.json() });

    }

    errorCallBack(error: Response) {
           return Observable.throw(error);
        }
    

}