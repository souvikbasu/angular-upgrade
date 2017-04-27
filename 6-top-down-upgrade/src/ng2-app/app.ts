import {NgModule, Component} from '@angular/core';
import {RouterModule, UrlHandlingStrategy} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';

import {AppComp5} from "./components/app-comp5/app-comp5.component";
import {AppComp1} from "./components/app-comp1/app-comp1.component";
import {AppComp2} from "./components/app-comp2/app-comp2.component";

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
        {provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy}
    ],

    bootstrap: [RootCmp],
    declarations: [RootCmp, AppComp5, AppComp1, AppComp2],
    entryComponents: [
        AppComp1, AppComp2
    ]
})
export class Ng2AppModule {
    constructor(public upgrade: UpgradeModule) {
    }
}