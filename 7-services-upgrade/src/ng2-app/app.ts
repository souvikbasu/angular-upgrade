import {NgModule, Component} from '@angular/core';
import {RouterModule, UrlHandlingStrategy} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';

import {AppComp5} from "./components/app-comp5/app-comp5.component";
import { service1Provider } from './services/service1-provider.service';
import {Service2} from "./services/service2.service";

export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
    shouldProcessUrl(url) {
        return url.toString().startsWith("/newModule");
    }

    extract(url) {
        return url;
    }

    merge(url, whole) {
        return url;
    }
}

@Component({
    selector: 'root-cmp',
    template: `
    <router-outlet></router-outlet>
    <div class="ng-view"></div>
  `,
})
export class RootCmp {
}

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,

        RouterModule.forRoot([]),
        RouterModule.forChild([
            {
                path: 'newModule', children: [
                {path: '', component: AppComp5}
            ]
            },
        ])
    ],
    providers: [
        {provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy},
        Service2,
        service1Provider
    ],

    bootstrap: [RootCmp],
    declarations: [RootCmp, AppComp5]
})
export class Ng2AppModule {
    constructor(public upgrade: UpgradeModule) {
    }
}