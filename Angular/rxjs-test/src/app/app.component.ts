import { Component } from '@angular/core';
import * as rxjs from 'rxjs';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-test';
  // //建立可觀察的Observable物件
  // click$ = rxjs.fromEvent(document, 'click');
  // //建立觀察者物件(Observer)
  // observer = { next: (x: any) => console.log(x) };
  // //建立訂閱物件(訂閱Observable物件，並傳入Observer)
  // sub$ = this.click$.subscribe(this.observer);



  ngOnInit(): void {

    var click$ = rxjs.fromEvent(document, 'click');
    click$ = click$.pipe(filter((x:any) => x.clientX < 100));

    var sub$ = click$.subscribe(x => console.log(x));
  }

  tt(): void {
    //取消訂閱Subscription物件
    // this.sub$.unsubscribe();
  }

}
