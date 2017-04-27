import * as angular from 'angular'
import 'angular-route'

import {Ng1Routes} from "./app.route";
import {AppComp1} from "./components/app-comp1/app-comp1";
import {AppComp2} from "./components/app-comp2/app-comp2";
import {AppComp3} from "./components/app-comp3/app-comp3";
import {AppComp4} from "./components/app-comp4/app-comp4";
import {Service1} from "./services/service1.svc";

export const Ng1AppModule = angular.module('ng1', ['ngRoute']);

Ng1AppModule.config(Ng1Routes);

Ng1AppModule.service('service1', Service1);

Ng1AppModule.component('appComp1', AppComp1);
Ng1AppModule.component('appComp2', AppComp2);
Ng1AppModule.component('appComp3', AppComp3);
Ng1AppModule.component('appComp4', AppComp4);
