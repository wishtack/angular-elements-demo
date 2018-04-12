import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { UserComponent } from './user.component';

@NgModule({
    declarations: [
        UserComponent
    ],
    entryComponents: [
        UserComponent
    ],
    imports: [
        BrowserModule
    ]
})
export class UserModule {

    constructor(injector: Injector) {
        const UserElement = createCustomElement(UserComponent, {injector});
        customElements.define('wt-user', UserElement as Function);
    }

    ngDoBootstrap() {
    }

}
