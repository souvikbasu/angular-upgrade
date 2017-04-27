import { Injectable } from '@angular/core';

@Injectable()
export class Service2 {

  constructor() { }

  getSomeData(): string {
      return "This data is from Angular 2 Service 2";
  }

}
