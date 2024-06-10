import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit{
  articles: Article[] = [
    {
      id: 1,
      name: 'Artículo 1',
      imageUrl: '../../assets/pato-1.png',
      price: 50,
      isOnSale: true,
      quantityInCart: 0
    },
    {
      id: 2,
      name: 'Artículo 2',
      imageUrl: '../../assets/pato-2.png',
      price: 75,
      isOnSale: true,
      quantityInCart: 0
    },
    {
      id: 3,
      name: 'Artículo 3',
      imageUrl: '../../assets/pato-3.png',
      price: 100,
      isOnSale: false,
      quantityInCart: 0
    }
  ];


  ngOnInit(): void {
    this.articles
  }

  onQuantityChange(change: ArticleQuantityChange) {
    const articleToUpdate = this.articles.find(article => article.id === change.article.id);
    if (articleToUpdate) {
      articleToUpdate.quantityInCart = change.quantity;
    }
  }
}

export interface ArticleQuantityChange {
  article: Article;
  quantity: number;
}