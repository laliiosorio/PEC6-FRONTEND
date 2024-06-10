import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../article.model';
import { ArticleQuantityChange } from '../article-list/article-list.component';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent {
  @Input() article: Article = {
    id: 0,
    name: 'Nombre del Artículo',
    imageUrl: '../../assets/pato-1.png',
    price: 100,
    isOnSale: false,
    quantityInCart: 0
  };

  constructor() {}

  @Output() quantityChange: EventEmitter<ArticleQuantityChange> = new EventEmitter<ArticleQuantityChange>();

  incrementQuantity() {
    this.article.quantityInCart++;
    this.emitQuantityChange();
  }

  decrementQuantity() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
      this.emitQuantityChange();
    }
  }

  private emitQuantityChange() {
    const change: ArticleQuantityChange = {
      article: this.article,
      quantity: this.article.quantityInCart
    };
    this.quantityChange.emit(change);
  }
}
