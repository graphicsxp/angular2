import { Component, OnInit } from '@angular/core';

import {ChildService } from './child.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: '<h1> My First Angular 2 App </h1>',
    providers: [ChildService]
})
export class AppComponent implements OnInit {
    constructor(private childService: ChildService) { 
        childService.doSomething();
    }

    ngOnInit() { }
}