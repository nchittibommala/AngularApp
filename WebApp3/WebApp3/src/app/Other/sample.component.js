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
var core_1 = require("@angular/core");
var sample = (function () {
    function sample() {
        for (var i = 0; i < 10; i++) {
            this.count = i;
            console.log(this.count);
        }
    }
    sample.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        for (var propertyName in changes) {
            var change = changes[propertyName];
            var currentValue = JSON.stringify(change.currentValue);
            var previousValue = JSON.stringify(change.previousValue);
            var firstchange = JSON.stringify(change.firstChange);
            var isFirstChange = JSON.stringify(change.isFirstChange);
            console.log(propertyName + " cureent value : " + currentValue + "   Previous value :" + previousValue);
            console.log("Fist change :" + firstchange + " IsFirstChange :" + isFirstChange);
        }
    };
    return sample;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], sample.prototype, "sampleText", void 0);
sample = __decorate([
    core_1.Component({
        selector: "sample",
        template: "<span> Entered text : {{sampleText}}</span>"
    }),
    __metadata("design:paramtypes", [])
], sample);
exports.sample = sample;
//# sourceMappingURL=sample.component.js.map