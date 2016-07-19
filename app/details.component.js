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
var DetailsComponent = (function () {
    function DetailsComponent(formService, route) {
        this.formService = formService;
        this.route = route;
    }
    ;
    /////////////////////////
    // Event handlers
    /////////////////////////
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            console.log(params);
            var id = +params['Id'];
            _this.formService.getDetails(id)
                .subscribe(function (user) { return _this.user = user; });
        });
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DetailsComponent.prototype.goBack = function () {
        window.history.back();
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'details',
            templateUrl: 'app/details.component.html',
            providers: [form_service_1.FormService]
        }), 
        __metadata('design:paramtypes', [form_service_1.FormService, router_1.ActivatedRoute])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map