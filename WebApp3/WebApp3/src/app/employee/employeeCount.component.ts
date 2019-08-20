import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "employee-count",
    templateUrl: "app/employee/employeeCount.component.html",
    styleUrls: ["app/employee/employeeCount.component.css"]
})

export class EmployeeCount {
    selectedEmployeeCount: string = 'All';

    @Output()
    employeeCountRadiobtnChange: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number;
    @Input()
    male: number;
    @Input()
    female: number;

    onRadiobtnChange(): void {
        this.employeeCountRadiobtnChange.emit(this.selectedEmployeeCount);
        console.log(this.selectedEmployeeCount);
    }
}