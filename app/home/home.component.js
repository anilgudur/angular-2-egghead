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
var widget_three_component_1 = require('../widgets/widget-three.component');
var HomeComponent = (function () {
    function HomeComponent(resolver) {
        this.resolver = resolver;
    }
    HomeComponent.prototype.ngAfterContentInit = function () {
        var widgetFactory = this.resolver.resolveComponentFactory(widget_three_component_1.WidgetThree);
        this.widgetThreeContainer.createComponent(widgetFactory);
        this.widgetThreeContainer.createComponent(widgetFactory);
        this.widgetThreeContainer.createComponent(widgetFactory);
        this.widgetThreeContainer.createComponent(widgetFactory);
        var widgetRef = this.widgetThreeContainer.createComponent(widgetFactory, 2);
        widgetRef.instance.message = "I'm third";
    };
    HomeComponent.prototype.onClick = function () {
        var widgetFactory = this.resolver.resolveComponentFactory(widget_three_component_1.WidgetThree);
        var widgetRef = this.widgetThreeContainer.createComponent(widgetFactory, 3);
        widgetRef.instance.message = "I'm fourth";
    };
    __decorate([
        core_1.ViewChild('widgetContainer', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', Object)
    ], HomeComponent.prototype, "widgetThreeContainer", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: "\n\t<button (click)=\"onClick()\">Add Component</button>\n  \t<div #widgetContainer></div>\n  "
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map