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
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var User = (function () {
    function User(http) {
        var _this = this;
        this.http = http;
        this.baseUrl = "/api/user";
        this.loggedIn = false;
        this.current = {};
        this.getCurrent().subscribe(function (user) {
            _this.current = user;
            _this.loggedIn = true;
        }, function (err) {
            console.warn("Not logged in: " + JSON.stringify(err));
            _this.current = {};
            _this.loggedIn = false;
        });
    }
    User.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    User.prototype.getCurrent = function () {
        return this.http.get(this.baseUrl + "/current")
            .map(function (res) { return res.json(); });
    };
    User.prototype.get = function (id) {
        return this.http.get(this.baseUrl + "/" + id)
            .map(function (res) { return res.json(); });
    };
    User.prototype.hasRole = function (role) {
        var authorities = this.current.authorities;
        if (authorities) {
            return authorities.find(function (descriptor) { return descriptor.authority === "ROLE_" + role; });
        }
        return false;
    };
    User = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map