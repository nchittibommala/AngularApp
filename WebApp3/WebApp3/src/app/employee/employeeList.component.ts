import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';
import { employeeService } from './employee.service';


@Component({
    selector: 'employe-list',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [employeeService]
})

export class EmployeeList implements OnInit  {
    employees: IEmployee[];
    selectedGender: string = 'All';
    emp: any = {};
    constructor(private _employeeService: employeeService) {
    }

    ngOnInit() {
        this._employeeService.getEmployeeList()
            .subscribe((employeeData) => this.employees = employeeData);
    }


    getRefreshedEmployeeList(): void {
        this._employeeService.getEmployeeList()
            .subscribe((employeeData) => { this.employees = employeeData },
                this.handleError);
    }

    handleError(error: any) {
        debugger;
        console.log("Error occured")
        console.log(error)
    }

    totalEmployeesCount(): number {
        return this.employees.length;
    }

    totalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.Gender == "Male").length;
    }

    totalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.Gender == "Female").length;
    }

    trackByEmployeeCode(index: number, employee: any): string {
        return employee.code;
    }

    OnRadioBtnSelectionChange(gender: string) : void {
        this.selectedGender = gender;
    }

    CreateEmployee() {
        debugger;
        this.emp.Code = "Emp106";
        this.emp.Name = "Lakshmi";
        this.emp.Age = 55;
        this.emp.Gender = 'Female';
        this.emp.DOB = "1960/01/02";
        this.emp.Salary = 20000;
        this._employeeService.createEmployee(this.emp).subscribe(data => {
            this.getRefreshedEmployeeList();
            console.log(data);
        })
    }
}