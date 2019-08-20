import { Component, OnChanges, SimpleChanges, Input } from "@angular/core";

@Component({
    selector: "sample",
    template:`<span> Entered text : {{sampleText}}</span>`
})

export class sample implements OnChanges {

    @Input() sampleText: string;
    count: number;
    constructor() {
        for (let i = 0; i < 10; i++) {
            this.count = i;
            console.log(this.count);
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let currentValue = JSON.stringify(change.currentValue);
            let previousValue = JSON.stringify(change.previousValue);
            let firstchange = JSON.stringify(change.firstChange);
            let isFirstChange = JSON.stringify(change.isFirstChange);
            console.log(propertyName + " cureent value : " + currentValue + "   Previous value :" + previousValue);
            console.log("Fist change :" + firstchange + " IsFirstChange :" + isFirstChange);
        }

    }

}