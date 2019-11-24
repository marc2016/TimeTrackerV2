"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var appLoad_service_1 = require("./appLoad.service");
var database_service_1 = require("./data-access/database.service");
function init_database(appLoadService) {
    return function () { return appLoadService.initializeDatabase(); };
}
exports.init_database = init_database;
var AppLoadModule = /** @class */ (function () {
    function AppLoadModule() {
    }
    AppLoadModule = __decorate([
        core_1.NgModule({
            imports: [],
            providers: [
                appLoad_service_1.AppLoadService,
                database_service_1.DatabaseService,
                { provide: core_1.APP_INITIALIZER, useFactory: init_database, deps: [appLoad_service_1.AppLoadService], multi: true },
            ]
        })
    ], AppLoadModule);
    return AppLoadModule;
}());
exports.AppLoadModule = AppLoadModule;
