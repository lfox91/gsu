import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { FormComponent } from './form.component';
import { RequestsComponent } from './request.component';
import { DetailsComponent } from './details.component';
import './rxjs-operator';

@Component({
    selector: 'my-app',
    template: `
    <header>
      <nav>
        <a [routerLink]="['/']">New Request</a>
        <a [routerLink]="['/requests']">Past Requests</a>
      </nav>
    </header>
    <router-outlet></router-outlet>`,
    directives: [FormComponent, ROUTER_DIRECTIVES],
    precompile: [FormComponent, RequestsComponent, DetailsComponent]
})
export class AppComponent {}
