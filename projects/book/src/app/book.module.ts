import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { BookComponent } from './book.component';

@NgModule({
    declarations: [
        BookComponent
    ],
    entryComponents: [
        BookComponent
    ],
    imports: [
        BrowserModule
    ]
})
export class BookModule {

    constructor(injector: Injector) {
        const BookElement = createCustomElement(BookComponent, {injector});
        customElements.define('wt-book', BookElement as Function);
    }

    ngDoBootstrap() {
    }

}
