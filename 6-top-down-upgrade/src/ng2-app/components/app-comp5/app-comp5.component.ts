import {Component} from '@angular/core';

@Component({
  selector: 'app-comp5',
  template: '<div (click)="showTitle()">Component 5</div>'
})
export class AppComp5 {
  constructor() {}

  showTitle(event) {
    alert("I am new Angular 2 !!");
  }
}