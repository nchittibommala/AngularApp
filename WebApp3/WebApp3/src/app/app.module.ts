import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeList } from './employee/employeeList.component';
import { formatName } from './employee/namePipe.component';
import { EmployeeCount } from './employee/employeeCount.component';
import { sample } from './Other/sample.component';
import { HomeComponent } from './Home/home.component';
import { PageNotFound } from './Other/pageNotFound.compoent';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "employee", component: EmployeeList },
    { path: "employee/:code", component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFound }

]

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes) ],
    declarations: [AppComponent, EmployeeComponent, EmployeeList, formatName, EmployeeCount, sample,
        HomeComponent, PageNotFound],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
