import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleModule } from './article/article.module';

@NgModule({
  declarations: [ // 用來宣告跟view有關的元件
    AppComponent, Page1Component, HeaderComponent, FooterComponent
  ],
  imports: [ // 用來匯入這個模組會用到的其他模組(模組及是元件集合)
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ArticleModule
  ],
  providers: [], // 註冊一些服務的提供者
  bootstrap: [AppComponent] // 啟動根元件
})
export class AppModule { }
