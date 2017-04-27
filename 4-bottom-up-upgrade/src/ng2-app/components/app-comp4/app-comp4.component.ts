import {Component} from '@angular/core';

@Component({
    selector: 'app-comp4',
    template: '<div (click)="showTitle()">Component 4</div>'
})
export class AppComp4 {
    constructor() {
    }

    showTitle(event) {
        alert("I am Angular 4 !!");
    }
}