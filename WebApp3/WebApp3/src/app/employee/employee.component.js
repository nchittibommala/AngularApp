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
var router_1 = require("@angular/router");
var EmployeeComponent = (function () {
    function EmployeeComponent(_employeeService, _activatedRoute) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
        this.colspan = 2;
        this.isShowDetails = true;
        this.oneWayDatabinding = "Welcome";
        this.twoWayDatabinding = "Hi";
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var code = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployee(code).subscribe(function (employee) { return _this.employee = employee; }, function (error) {
            console.log(error);
        });
    };
    EmployeeComponent.prototype.btnClick = function () {
        this.isShowDetails = !this.isShowDetails;
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'employee-app',
        templateUrl: 'app/employee/employee.component.html',
        styleUrls: ['app/employee/employee.component.css'],
        providers: [employee_service_1.employeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.employeeService, router_1.ActivatedRoute])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map