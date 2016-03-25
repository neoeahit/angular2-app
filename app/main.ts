import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';
import 'rxjs/add/operator/map';
import {AppComponent} from './app.components'
import {LocationStrategy, Location, HashLocationStrategy } from 'angular2/router';

import {RETService} from './services/RETService'


import {ROUTER_PROVIDERS} from 'angular2/router';
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  RETService
]);
