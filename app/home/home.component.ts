import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SimpleService } from '../services/services.module';
import { WidgetThree }   from '../widgets/widget-three.component';

@Component({
  selector: 'home',
  template: `
	<button (click)="onClick()">Add Component</button>
	<button (click)="onClickMove()">Move Component</button>
	<button (click)="onClickDetach()">Detach Component</button>
  	<div #widgetContainer></div>
  `
})
export class HomeComponent {
	//constructor(private simpleService:SimpleService){}

	@ViewChild('widgetContainer', {read:ViewContainerRef}) widgetThreeContainer;

	widgetRef;

	constructor(private resolver:ComponentFactoryResolver){}

	ngAfterContentInit(){
		const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);

		this.widgetThreeContainer.createComponent(widgetFactory);
		this.widgetThreeContainer.createComponent(widgetFactory);
		this.widgetThreeContainer.createComponent(widgetFactory);
		this.widgetThreeContainer.createComponent(widgetFactory);
		this.widgetRef = this.widgetThreeContainer.createComponent(widgetFactory, 2);
		this.widgetRef.instance.message = "I'm third";
	}

	onClick(){
		const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);

		const widgetRef2 = this.widgetThreeContainer.createComponent(widgetFactory, 3);
		widgetRef2.instance.message = "I'm fourth";
	}

	onClickMove(){
		const randomIndex = Math.floor( Math.random() * this.widgetThreeContainer.length );

		this.widgetThreeContainer.move(this.widgetRef.hostView, randomIndex);
	}

	onClickDetach(){
		this.widgetThreeContainer.detach(2);
	}
}
