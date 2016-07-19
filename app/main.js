// Imports for loading & configuring the in-memory web api
// import { XHRBackend } from '@angular/http';
//
// import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
// import { InMemoryDataService }               from './fauxData.service';
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
var core_1 = require('angular2/core');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    http_1.HTTP_PROVIDERS,
    app_routes_1.appRouterProviders
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map