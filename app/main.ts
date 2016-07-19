// Imports for loading & configuring the in-memory web api
// import { XHRBackend } from '@angular/http';
//
// import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
// import { InMemoryDataService }               from './fauxData.service';

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { appRouterProviders } from './app.routes';

import { AppComponent } from './app.component';
import { enableProdMode } from '@angular/core';
enableProdMode();

bootstrap( AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  appRouterProviders
  // { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
  // { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
 ])
 .catch((err: any) => console.error(err));
