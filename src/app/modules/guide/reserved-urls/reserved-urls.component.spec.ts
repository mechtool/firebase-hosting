import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedUrlsComponent } from './reserved-urls.component';

describe('ReservedUrlsComponent', () => {
  let component: ReservedUrlsComponent;
  let fixture: ComponentFixture<ReservedUrlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservedUrlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservedUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
