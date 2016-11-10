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
var WidgetTwo = (function () {
    function WidgetTwo() {
    }
    WidgetTwo = __decorate([
        core_1.Component({
            selector: 'widget-two',
            styles: ["\n  :host{\n  \t\tdisplay:block;\n  \t\tborder: 3px solid red;\n  }\n  "],
            template: "\n  <h2>Above</h2>\n  \n  <ng-content select=\"div\"></ng-content>\n  <ng-content select=\"h3\"></ng-content>\n  <ng-content select=\"h2\"></ng-content>\n\n  <h2>Below</h2>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetTwo);
    return WidgetTwo;
}());
exports.WidgetTwo = WidgetTwo;
//# sourceMappingURL=widget-two.component.js.map