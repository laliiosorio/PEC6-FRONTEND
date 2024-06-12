import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
    transform(imageUrl: string): string {
        return imageUrl ? imageUrl : 'assets/images/default-img.jpg';
    }
}
