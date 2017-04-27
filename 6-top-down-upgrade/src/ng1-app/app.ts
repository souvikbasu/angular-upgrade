import * as angular from 'angular'
import 'angular-route'

import { downgradeComponent } from '@angular/upgrade/static';

import {Ng1Routes} from "./app.route";
import {AppComp3} from "./components/app-comp3/app-comp3";
import {AppComp4} from "./components/app-comp4/app-comp4";
import {Service1} from "./services/service1.svc";
import {AppComp2} from "../ng2-app/components/app-comp2/app-comp2.component";
import {AppComp1} from "../ng2-app/components/app-comp1/app-comp1.component";

export const Ng1AppModule = angular.module('ng1', ['ngRoute']);

Ng1AppModule.config(Ng1Routes);

Ng1AppModule.service('service1', Service1);

Ng1AppModule.directive(
    'appComp1',
    downgradeComponent({component: AppComp1}) as angular.IDirectiveFactory
);

Ng1AppModule.directive(
    'appComp2',
    downgradeComponent({component: AppComp2}) as angular.IDirectiveFactory
);

Ng1AppModule.component('appComp3', AppComp3);
Ng1AppModule.component('appComp4', AppComp4);
