import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-acticle-header',
  templateUrl: './acticle-header.component.html',
  styleUrls: ['./acticle-header.component.scss']
})
export class ActicleHeaderComponent implements OnInit {

  @Input() item = 0;

  @Output() delete = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteArticle(): void {
    this.delete.emit(this.item);
    console.log('object');
  }

}
