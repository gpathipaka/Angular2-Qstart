import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1> {{ strMessage }}</h1>
    `
})
export class AppComponent { 
    strMessage: String = "Hello Mr.Angular2!!!";
}