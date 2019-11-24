"use strict";
exports.__esModule = true;
var path = require("path");
var electron_1 = require("electron");
var environment_1 = require("../../environments/environment");
var Settings = /** @class */ (function () {
    function Settings() {
    }
    Settings.initialize = function () {
        Settings.getPaths();
    };
    Settings.getPaths = function () {
        if (environment_1.environment.production) {
            this.dataSubFolder = '/';
            Settings.appPath = electron_1.remote.app.getPath('userData');
        }
        else {
            // return folder where app is running
            this.dataSubFolder = 'dist/assets/data';
            Settings.appPath = electron_1.remote.app.getAppPath();
        }
        Settings.dbFolder = path.join(Settings.appPath, Settings.dataSubFolder);
        Settings.dbPath = path.join(Settings.dbFolder, this.dbName);
    };
    Settings.dbName = 'database.db';
    return Settings;
}());
exports.Settings = Settings;
