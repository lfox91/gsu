import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { FormComponent } from './form.component';
import { RequestsComponent } from './request.component';
import { DetailsComponent } from './details.component';
import { DataTableDirectives } from 'angular2-datatable/datatable';
import './rxjs-operator';

@Component({
    selector: 'my-app',
    template: `
    <header>
      <nav>
        <a [routerLink]="['/']" routerLinkActive="active">New Request</a>
        <a [routerLink]="['/requests']" routerLinkActive="active">Past Requests</a>
      </nav>
    </header>
    <router-outlet></router-outlet>`,
    directives: [FormComponent, ROUTER_DIRECTIVES, DataTableDirectives],
    precompile: [FormComponent, RequestsComponent, DetailsComponent]
})
export class AppComponent {}
