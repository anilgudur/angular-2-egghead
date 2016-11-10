import {Component, ViewChild, Renderer} from "@angular/core";
@Component({
	selector: 'widget-three',
	template: `
		<input #whatever type="text">
	`
})
export class WidgetThree{
	@ViewChild('whatever') input;

	constructor(private renderer:Renderer){}

	ngAfterViewInit(){
		this.renderer.invokeElementMethod(
			this.input.nativeElement,
			'focus',
			[]
		)
	}
}