import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActicleFooterComponent } from './acticle-footer.component';

describe('ActicleFooterComponent', () => {
  let component: ActicleFooterComponent;
  let fixture: ComponentFixture<ActicleFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActicleFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActicleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
