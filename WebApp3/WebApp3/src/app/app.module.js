"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var namePipe_component_1 = require("./employee/namePipe.component");
var employeeCount_component_1 = require("./employee/employeeCount.component");
var sample_component_1 = require("./Other/sample.component");
var home_component_1 = require("./Home/home.component");
var pageNotFound_compoent_1 = require("./Other/pageNotFound.compoent");
var routes = [
    { path: "home", component: home_component_1.HomeComponent },
    { path: "employee", component: employeeList_component_1.EmployeeList },
    { path: "employee/:code", component: employee_component_1.EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFound_compoent_1.PageNotFound }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(routes)],
        declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, employeeList_component_1.EmployeeList, namePipe_component_1.formatName, employeeCount_component_1.EmployeeCount, sample_component_1.sample,
            home_component_1.HomeComponent, pageNotFound_compoent_1.PageNotFound],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map