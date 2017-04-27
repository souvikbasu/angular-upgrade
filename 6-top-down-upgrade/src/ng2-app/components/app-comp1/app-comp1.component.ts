import {Component} from '@angular/core';

@Component({
    selector: 'app-comp1',
    template: `
        <a href="newModule" class="next-page">New Module (NG2)</a>
        <a href="route2" class="next-page">Route 2</a>
        <div (click)="showTitle()">Component 1</div>
        <app-comp2></app-comp2>
        <ng-content></ng-content>`
})
export class AppComp1 {
    constructor() {
    }

    showTitle(event) {
        alert("I am Angular 4 !!");
    }
}