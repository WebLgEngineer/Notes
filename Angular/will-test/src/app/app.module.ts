import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // 用來宣告跟view有關的元件
    AppComponent
  ],
  imports: [ // 用來匯入這個模組會用到的其他模組(模組及是元件集合)
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // 註冊一些服務的提供者
  bootstrap: [AppComponent] // 啟動根元件
})
export class AppModule { }
