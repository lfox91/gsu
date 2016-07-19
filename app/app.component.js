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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var form_component_1 = require('./form.component');
var request_component_1 = require('./request.component');
var details_component_1 = require('./details.component');
require('./rxjs-operator');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <header>\n      <nav>\n        <a [routerLink]=\"['/']\" routerLinkActive=\"active\">New Request</a>\n        <a [routerLink]=\"['/requests']\" routerLinkActive=\"active\">Past Requests</a>\n      </nav>\n    </header>\n    <router-outlet></router-outlet>",
            directives: [form_component_1.FormComponent, router_1.ROUTER_DIRECTIVES],
            precompile: [form_component_1.FormComponent, request_component_1.RequestsComponent, details_component_1.DetailsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map