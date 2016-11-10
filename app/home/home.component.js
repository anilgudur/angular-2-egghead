"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var services_module_1 = require('../services/services.module');
var HomeComponent = (function () {
    function HomeComponent(simpleService) {
        this.simpleService = simpleService;
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: "\n  <widget-two>\n  \t<h2 class=\"header\">Title</h2>\n  \t<div class=\"content\">Some content</div>\n  \t<h3 class=\"footer\">Footer</h3>\n  </widget-two>\n  "
        }), 
        __metadata('design:paramtypes', [services_module_1.SimpleService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map