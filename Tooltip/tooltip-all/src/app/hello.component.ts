import { Component, Input } from "@angular/core";


@Component({
    selector: 'hello',
    template: `<h1>  {{title}}!</h1>`,
    styles: [`h1 {font-famly:Loto;}`]

})
export class HelloComponent {
    @Input() title!: string;
}