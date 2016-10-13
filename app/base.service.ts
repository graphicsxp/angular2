import { Injectable } from '@angular/core';

@Injectable()
export class BaseService<T> {

    constructor() { }

    doSomething<T>(){ 
        console.log('base service called');
    }
}