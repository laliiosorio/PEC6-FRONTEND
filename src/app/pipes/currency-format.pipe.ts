import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
    transform(value: number): string {
        // Format the value to two decimal places and add the Euro currency symbol at the end
        return value.toFixed(2) + ' €';
    }
}
