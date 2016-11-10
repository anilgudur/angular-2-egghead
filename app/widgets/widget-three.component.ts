import {Component, ViewChild, Renderer, Input} from "@angular/core";
@Component({
	selector: 'widget-three',
	template: `
		<input #whatever type="text" [value]="message">
	`
})
export class WidgetThree{
	@ViewChild('whatever') input;

	@Input() message = "default value!";

	constructor(private renderer:Renderer){}

	ngAfterViewInit(){
		this.renderer.invokeElementMethod(
			this.input.nativeElement,
			'focus',
			[]
		)
	}
}