import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActicleHeaderComponent } from './acticle-header.component';

describe('ActicleHeaderComponent', () => {
  let component: ActicleHeaderComponent;
  let fixture: ComponentFixture<ActicleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActicleHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActicleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
