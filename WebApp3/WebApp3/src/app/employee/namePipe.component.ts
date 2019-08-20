import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: "formatName"
})

export class formatName implements PipeTransform {
    transform(value: string, gender: string): string {
        if (gender.toLowerCase() == "male") {
            return "Mr. " + value;
        }
        else {
            return "Miss. " + value;
        }
    }
}