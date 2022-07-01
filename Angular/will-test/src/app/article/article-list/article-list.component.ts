import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  list = [0, 1, 2, 3, 4, 5];



  constructor() { }

  ngOnInit(): void {
  }

  doDelete(item: number): void {
    this.list = this.list.filter((v) => {
      return v !== item;
    });
  }
}
