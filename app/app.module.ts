import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseService } from './base.service'; 

@NgModule({
    imports: [BrowserModule],
    exports: [],
    declarations: [AppComponent],
    providers: [BaseService],
    bootstrap: [AppComponent]
})
export class AppModule { }
