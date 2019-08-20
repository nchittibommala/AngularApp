import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
   template: `<div style='padding:5px'>
                    <ul class='nav nav-tabs'>
                        <li> <a routerLink='home'>Home </a>
                        <li> <a routerLink='employee'>Employee List </a>
                    </ul>

                <router-outlet></router-outlet>
               </div>`
  
})


    //template: `<div style='padding:5px'>
    //                <ul class='nav nav-tabs'>
    //                    <li> <a routerLink='home'>Home </a>
    //                    <li> <a routerLink='employee'>Employee List </a>
    //                </ul>
                    
    //            <router-outlet></router-outlet>
    //           </div>`

//templateUrl: '/app/app.component.html',

//template: `Your text : <input [(ngModel)] = 'usertext'/>
//                <br/><br/>
//                <sample [sampleText] ='usertext'></sample>`,

export class AppComponent  {
    name = 'Angular';
}
