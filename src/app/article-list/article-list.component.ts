import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { Observable, Subject } from 'rxjs';
import { ArticleService } from '../services/article-service.service';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {
  //  ********** Punto práctico 4  **********

  articles!: Observable<Article[]>;
  private searchTerms = new Subject<string>();

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles = this.searchTerms.pipe(
      startWith(''), // Emit a default search term to load all articles initially
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.articleService.getArticles(term))
    );

  }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerms.next(inputElement.value);
  }

  onQuantityChange(change: { article: Article, quantity: number }) {
    this.articleService.changeQuantity(change.article.id, change.quantity).subscribe();
  }

  //  ********** Punto práctico 2  **********
  // articles!: Observable<Article[]>;

  // constructor(private articleService: ArticleService) { }

  // ngOnInit(): void {
  //   this.articles = this.articleService.getArticles();
  // }

  // onQuantityChange(change: ArticleQuantityChange) {
  //   this.articleService.changeQuantity(change.article.id, change.quantity - change.article.quantityInCart)
  //     .subscribe({
  //       next: updatedArticle => {
  //       },
  //       error: err => {
  //         console.error('Error actualizando la cantidad', err);
  //       }
  //     });
  // }
}


export interface ArticleQuantityChange {
  article: Article;
  quantity: number;
}