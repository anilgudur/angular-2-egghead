import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SimpleService } from '../services/services.module';
import { WidgetThree }   from '../widgets/widget-three.component';

@Component({
  selector: 'home',
  template: `
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
		this.widgetThreeContainer.createComponent(widgetFactory);
	}
}
