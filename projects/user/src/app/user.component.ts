import { Component, Input } from '@angular/core';

@Component({
    selector: 'wt-user',
    template: `
  <div>User: {{ name }}</div>
  `
})
export class UserComponent {

    @Input() name: string;

}
