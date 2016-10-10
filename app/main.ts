import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {Config} from "./app.config";

Config.loadInstance('config.json')
    .then(() => {
        platformBrowserDynamic().bootstrapModule(AppModule);
    });
