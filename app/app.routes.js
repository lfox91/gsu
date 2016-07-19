"use strict";
var router_1 = require('@angular/router');
var request_component_1 = require('./request.component');
var details_component_1 = require('./details.component');
var form_component_1 = require('./form.component');
var routes = [
    { path: '', component: form_component_1.FormComponent },
    { path: 'requests', component: request_component_1.RequestsComponent },
    { path: 'requests/:id', component: details_component_1.DetailsComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map