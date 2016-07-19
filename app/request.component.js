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
var form_service_1 = require('./form.service');
var RequestsComponent = (function () {
    function RequestsComponent(formService, elRef, router) {
        this.formService = formService;
        this.elRef = elRef;
        this.router = router;
        this.users = [];
    }
    ;
    RequestsComponent.prototype.getUsers = function () {
        var _this = this;
        return this.formService
            .getUsers()
            .map(function (users) { return _this.users = users; });
    };
    /////////////////////////
    // Event handlers
    /////////////////////////
    RequestsComponent.prototype.ngOnInit = function () {
        this.getUsers();
        jQuery(this.elRef.nativeElement).DataTable();
    };
    RequestsComponent.prototype.showDetail = function (user) {
        this.selectedUser = user;
        this.router.navigate(['/requests/', this.selectedUser.Id]);
    };
    RequestsComponent = __decorate([
        core_1.Component({
            selector: 'requests',
            templateUrl: 'app/request.component.html',
            providers: [form_service_1.FormService]
        }),
        core_1.Directive({
            selector: '.table'
        }), 
        __metadata('design:paramtypes', [form_service_1.FormService, core_1.ElementRef, router_1.Router])
    ], RequestsComponent);
    return RequestsComponent;
}());
exports.RequestsComponent = RequestsComponent;
//# sourceMappingURL=request.component.js.map