import { Component } from '@angular/core';
import { SimpleService } from '../services/services.module';

@Component({
  selector: 'home',
  template: `
  <widget-two>
  	<h2 class="header">Title</h2>
  	<div class="content">Some content</div>
  	<h3 class="footer">Footer</h3>
  </widget-two>
  `
})
export class HomeComponent {
	constructor(private simpleService:SimpleService){}
}
