import { provideRouter, RouterConfig } from '@angular/router';

import { RequestsComponent } from './request.component';
import { DetailsComponent } from './details.component';
import { FormComponent } from "./form.component";

const routes: RouterConfig = [
  { path: '', component: FormComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'requests/:id', component: DetailsComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
