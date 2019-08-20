"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var EmployeeList = (function () {
    function EmployeeList(_employeeService) {
        this._employeeService = _employeeService;
        this.selectedGender = 'All';
        this.emp = {};
    }
    EmployeeList.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployeeList()
            .subscribe(function (employeeData) { return _this.employees = employeeData; });
    };
    EmployeeList.prototype.getRefreshedEmployeeList = function () {
        var _this = this;
        this._employeeService.getEmployeeList()
            .subscribe(function (employeeData) { _this.employees = employeeData; }, this.handleError);
    };
    EmployeeList.prototype.handleError = function (error) {
        debugger;
        console.log("Error occured");
        console.log(error);
    };
    EmployeeList.prototype.totalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeList.prototype.totalMaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.Gender == "Male"; }).length;
    };
    EmployeeList.prototype.totalFemaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.Gender == "Female"; }).length;
    };
    EmployeeList.prototype.trackByEmployeeCode = function (index, employee) {
        return employee.code;
    };
    EmployeeList.prototype.OnRadioBtnSelectionChange = function (gender) {
        this.selectedGender = gender;
    };
    EmployeeList.prototype.CreateEmployee = function () {
        var _this = this;
        debugger;
        this.emp.Code = "Emp106";
        this.emp.Name = "Lakshmi";
        this.emp.Age = 55;
        this.emp.Gender = 'Female';
        this.emp.DOB = "1960/01/02";
        this.emp.Salary = 20000;
        this._employeeService.createEmployee(this.emp).subscribe(function (data) {
            _this.getRefreshedEmployeeList();
            console.log(data);
        });
    };
    return EmployeeList;
}());
EmployeeList = __decorate([
    core_1.Component({
        selector: 'employe-list',
        templateUrl: 'app/employee/employeeList.component.html',
        styleUrls: ['app/employee/employeeList.component.css'],
        providers: [employee_service_1.employeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.employeeService])
], EmployeeList);
exports.EmployeeList = EmployeeList;
//# sourceMappingURL=employeeList.component.js.map