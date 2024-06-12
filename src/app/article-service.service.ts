import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article.model'; // Asegúrate de tener un modelo Article

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = [
    { id: 1, name: 'Artículo 1', imageUrl: '../../assets/pato-1.png', price: 50, isOnSale: true, quantityInCart: 0 },
    { id: 2, name: 'Artículo 2', imageUrl: '../../assets/pato-2.png', price: 75, isOnSale: true, quantityInCart: 0 },
    { id: 3, name: 'Artículo 3', imageUrl: '../../assets/pato-3.png', price: 100, isOnSale: false, quantityInCart: 0 }
  ];

  getArticles(): Observable<Article[]> {
    return new Observable<Article[]>(observer => {
      observer.next(this.articles);
      observer.complete();
    });
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable<Article> {
    return new Observable<Article>(observer => {
      const article = this.articles.find(a => a.id === articleID);
      if (article) {
        article.quantityInCart += changeInQuantity;
        observer.next(article);
        observer.complete();
      } else {
        observer.error(new Error('Artículo no encontrado'));
      }
    });
  }

  create(article: Article): Observable<any> {
    return new Observable<any>(observer => {
      this.articles.push(article);
      observer.next(article);
      observer.complete();
    });
  }
}
