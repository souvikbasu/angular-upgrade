import {Component, OnInit} from '@angular/core';

import {Service2} from '../../services/service2.service';
import {Service1} from "../../../ng1-app/services/service1.svc";

@Component({
    selector: 'app-comp5',
    template: '<div>{{ data1 }}</div><div>{{ data2 }}</div><div (click)="showTitle()">Component 5</div>',
    providers: [Service1, Service2]
})
export class AppComp5 implements OnInit {
    private service1: Service1;
    private service2: Service2;

    constructor(service1: Service1, service2: Service2) {
        this.service1 = service1;
        this.service2 = service2;
    }

    public data1: any;
    public data2: any;

    ngOnInit(): void {
        this.data1 = this.service1.getSomeData();
        this.data2 = this.service2.getSomeData();
    }

    showTitle(event) {
        alert("I am new Angular 2 !!");
    }
}