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
var form_service_1 = require('./form.service');
var user_1 = require('./user');
var FormComponent = (function () {
    function FormComponent(formService) {
        this.formService = formService;
        this.users = [];
        this.id = 1;
        this.user = new user_1.User(this.id, '', '', '', '', '');
        this.submitted = false;
        this.active = true;
    }
    ;
    FormComponent.prototype.getUsers = function () {
        var _this = this;
        return this.formService
            .getUsers()
            .map(function (users) { _this.users = users; _this.id = users.length; });
    };
    FormComponent.prototype.save = function () {
        var _this = this;
        this.getUsers().subscribe(function (users) { _this.formService.save(_this.user); }, function (err) { _this.errorMessage = err; console.log(err); });
    };
    /////////////////////////
    // Event handlers
    /////////////////////////
    FormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.save();
    };
    FormComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    FormComponent.prototype.clear = function () {
        var _this = this;
        this.user = new user_1.User(this.id, '', '', '', '', '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'user-form',
            templateUrl: 'app/form.component.html',
            providers: [form_service_1.FormService]
        }), 
        __metadata('design:paramtypes', [form_service_1.FormService])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map