import { Component } from '@angular/core';
import { FormComponent } from './form.component';
import './rxjs-operator';

@Component({
    selector: 'my-app',
    template: '<user-form></user-form>',
    directives: [FormComponent]
})
export class AppComponent {}
