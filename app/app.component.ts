import { Component } from '@angular/core';

import {Config} from "./app.config";

@Component({
    selector: 'my-app',
    template: '<h1>n2-config</h1>{{config.data | json}}'
})
export class AppComponent {

    constructor(public config: Config) { }

}
