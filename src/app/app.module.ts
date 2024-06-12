import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import your AppRoutingModule
import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleNewTemplateComponent,
    ArticleNewReactiveComponent,
    ArticleItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
