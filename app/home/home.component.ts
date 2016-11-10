import { Component } from '@angular/core';
import { SimpleService } from '../services/services.module';

@Component({
  selector: 'home',
  template: `
  <widget-two>
  	<h2>Title</h2>
  	<div>Some content</div>
  	<h3>Footer</h3>
  </widget-two>
  `
})
export class HomeComponent {
	constructor(private simpleService:SimpleService){}
}
