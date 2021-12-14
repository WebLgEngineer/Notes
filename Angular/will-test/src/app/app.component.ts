import { Component } from '@angular/core';

@Component({ // 用來宣告這個class 是一個component
  selector: 'app-root', // 選取器(對應到html標籤，也可以使用.app-root 則html上要寫 <div class="app-root"></div>)
  templateUrl: './app.component.html', // 對應AppComponent的html
  styleUrls: ['./app.component.scss'] // 對應AppComponent的css
})
export class AppComponent {
  title = 'will-test';
}
