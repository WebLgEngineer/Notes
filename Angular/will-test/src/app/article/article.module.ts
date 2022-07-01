import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ActicleHeaderComponent } from './acticle-header/acticle-header.component';
import { ActicleFooterComponent } from './acticle-footer/acticle-footer.component';
import { ActicleBodyComponent } from './acticle-body/acticle-body.component';



@NgModule({
  declarations: [ArticleListComponent, ActicleHeaderComponent, ActicleFooterComponent, ActicleBodyComponent],
  imports: [
    CommonModule
  ],
  exports: [ArticleListComponent]
})
export class ArticleModule { }
