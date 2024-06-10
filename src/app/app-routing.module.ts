import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent,
  },
  {
    path: 'list',
    component: ArticleListComponent,
  },
  {
    path: 'create-article-driven',
    component: ArticleNewTemplateComponent,
  },
  {
    path: 'create-article-reactive',
    component: ArticleNewReactiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule],
})
export class AppRoutingModule { }
