
import {Directive, ElementRef, Injector} from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
    selector: 'app-comp7'
})
export class AppComp4Directive extends UpgradeComponent {
    constructor(elementRef: ElementRef, injector: Injector) {
        super('appComp7', elementRef, injector);
    }

}
