import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { Observable } from 'rxjs';
import { ArticleService } from '../article-service.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit{
  articles!: Observable<Article[]>;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }

  onQuantityChange(change: ArticleQuantityChange) {
    this.articleService.changeQuantity(change.article.id, change.quantity - change.article.quantityInCart)
      .subscribe({
        next: updatedArticle => {
        },
        error: err => {
          console.error('Error actualizando la cantidad', err);
        }
      });
  }
}


export interface ArticleQuantityChange {
  article: Article;
  quantity: number;
}