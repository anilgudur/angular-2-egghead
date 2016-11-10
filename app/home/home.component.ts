import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SimpleService } from '../services/services.module';
import { WidgetThree }   from '../widgets/widget-three.component';

@Component({
  selector: 'home',
  template: `
	<button (click)="onClick()">Add Component</button>
  	<div #widgetContainer></div>
  `
})
export class HomeComponent {
	//constructor(private simpleService:SimpleService){}

	@ViewChild('widgetContainer', {read:ViewContainerRef}) widgetThreeContainer;

	constructor(private resolver:ComponentFactoryResolver){}

	ngAfterContentInit(){
		const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);

		this.widgetThreeContainer.createComponent(widgetFactory);
		this.widgetThreeContainer.createComponent(widgetFactory);
		this.widgetThreeContainer.createComponent(widgetFactory);
		this.widgetThreeContainer.createComponent(widgetFactory);
		const widgetRef = this.widgetThreeContainer.createComponent(widgetFactory, 2);
		widgetRef.instance.message = "I'm third";
	}

	onClick(){
		const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);

		const widgetRef = this.widgetThreeContainer.createComponent(widgetFactory, 3);
		widgetRef.instance.message = "I'm fourth";
	}
}
