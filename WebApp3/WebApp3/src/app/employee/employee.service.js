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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
// Below attribute is used to inject it's dependencies 
var employeeService = (function () {
    function employeeService(_http) {
        this._http = _http;
    }
    employeeService.prototype.getEmployeeList = function () {
        //return [
        //    { Code: "emp101", Name: "Nagendra", Gender: "Male", Age: 30, DOB: "09/16/1988", Salary: 11000.784 },
        //    { Code: "emp102", Name: "Gargi", Gender: "Female", Age: 1, DOB: "08/26/2018", Salary: 15000 },
        //    { Code: "emp103", Name: "Teja", Gender: "Female", Age: 30, DOB: "02/28/1989", Salary: 20000.8897 },
        //    { Code: "emp104", Name: "VenkateswaraRao", Gender: "Male", Age: 60, DOB: "02/28/1960", Salary: 25000.111 },
        //    { Code: "emp105", Name: "VenkateswaraRao", Gender: "Male", Age: 60, DOB: "02/28/1960", Salary: 25000.111 }
        //]
        return this._http.get('http://localhost:60583/api/Employee')
            .map(function (resonse) { return resonse.json(); })
            .catch(this.errorCallBack);
    };
    employeeService.prototype.getEmployee = function (code) {
        return this._http.get('http://localhost:60583/api/Employee/' + code)
            .map(function (response) { return response.json(); })
            .catch(this.errorCallBack);
    };
    employeeService.prototype.createEmployee = function (employee) {
        var myHeaders = new http_1.Headers();
        myHeaders.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: myHeaders });
        options.method = http_1.RequestMethod.Post;
        return this._http.post("http://localhost:60583/api/Employee", JSON.stringify(employee), options)
            .map(function (res) { return res.json(); });
    };
    employeeService.prototype.errorCallBack = function (error) {
        return Observable_1.Observable.throw(error);
    };
    return employeeService;
}());
employeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], employeeService);
exports.employeeService = employeeService;
//# sourceMappingURL=employee.service.js.map