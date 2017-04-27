import {Component} from '@angular/core';

@Component({
    selector: 'app-comp2',
    template: '<div (click)="showTitle()">Component 2</div>'
})
export class AppComp2 {
    constructor() {
    }

    showTitle(event) {
        alert("I am Angular 4 !!");
    }
}