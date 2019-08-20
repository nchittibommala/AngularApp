import { Component, OnInit } from '@angular/core';
import { employeeService } from './employee.service';
import { IEmployee } from './IEmployee';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'employee-app',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls : ['app/employee/employee.component.css'],
    providers: [employeeService]
})

export class EmployeeComponent implements OnInit {
    colspan : number =2
    isShowDetails: boolean = true;

    employee: IEmployee;


    oneWayDatabinding: string = "Welcome";
    twoWayDatabinding: string = "Hi";

    constructor(private _employeeService: employeeService, private _activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        let code: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployee(code).subscribe((employee) => this.employee = employee,
            (error) => {
                console.log(error);
            });
    }

    btnClick(): void {
        this.isShowDetails = !this.isShowDetails;
    }
}