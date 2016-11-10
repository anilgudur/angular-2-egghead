import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SimpleService } from '../services/services.module';
import { WidgetThree }   from '../widgets/widget-three.component';

@Component({
  selector: 'home',
  template: `
	<button (click)="onClick()">Add Component</button>
	<button (click)="onClickMove()">Move Component</button>
	<button (click)="onClickDetach()">Detach Component</button>
	
	<button (click)="onClickCreateTemplate()">Create Template</button>
	
  	<div #widgetContainer></div>
  	
  	<template #templateContainer let-letDescription="description">
	  	<h2>My {{letDescription}} template</h2>
	  	<button>My {{letDescription}} button</button>
	</template>
  `
})
export class HomeComponent {
	//constructor(private simpleService:SimpleService){}

	@ViewChild('widgetContainer', {read:ViewContainerRef}) widgetThreeContainer;

	@ViewChild('templateContainer') varTemplateContainer;

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

	onClickCreateTemplate(){
		this.widgetThreeContainer.createEmbeddedView(this.varTemplateContainer, {
			description: "sweet"
		});
	}
}
