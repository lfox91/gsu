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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var Observable_1 = require('rxjs/Observable');
//TODO: Add storedetail method befor promise
var FormService = (function () {
    function FormService(http) {
        this.http = http;
        this.usersUrl = 'app/users'; // URL to web api
    }
    FormService.prototype.getUsers = function () {
        return this.http
            .get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    FormService.prototype.post = function (user) {
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post(this.usersUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    FormService.prototype.put = function (user) {
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.usersUrl + "/" + user.id;
        console.log("updating user with id " + user.id);
        console.log('from put request ' + JSON.stringify(user));
        return this.http
            .put(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    FormService.prototype.delete = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.usersUrl + "/" + user.id;
        return this.http
            .delete(url, headers)
            .map(this.extractData)
            .catch(this.handleError);
    };
    FormService.prototype.save = function (user) {
        var _this = this;
        this.find(user).subscribe(function (found) {
            if (found) {
                console.log('putting User');
                return _this.put(user).subscribe(function (res) { return _this.getUsers().subscribe(function (users) { console.log(users); }); });
            }
            console.log('posting User');
            ++user.id;
            return _this.post(user).subscribe(function (res) { return _this.getUsers().subscribe(function (users) { console.log(users); }); });
        });
    };
    FormService.prototype.extractData = function (res) {
        var body = res.json();
        console.log('extract body: f.s 69: ' + body);
        return body.data || {};
    };
    FormService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    FormService.prototype.find = function (user) {
        return this.getUsers().map(function (userArr) {
            var index = userArr.findIndex(function (el) {
                console.log("el: " + JSON.stringify(el));
                console.log("User: " + JSON.stringify(user));
                return el.lastName == user.lastName && el.firstName == user.firstName;
            });
            return index > -1 && userArr.length > 0;
        });
    };
    FormService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FormService);
    return FormService;
}());
exports.FormService = FormService;
//# sourceMappingURL=form.service.js.map