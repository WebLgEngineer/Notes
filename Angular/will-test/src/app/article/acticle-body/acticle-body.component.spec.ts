import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActicleBodyComponent } from './acticle-body.component';

describe('ActicleBodyComponent', () => {
  let component: ActicleBodyComponent;
  let fixture: ComponentFixture<ActicleBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActicleBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActicleBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
