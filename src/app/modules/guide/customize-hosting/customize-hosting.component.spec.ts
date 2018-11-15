import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeHostingComponent } from './customize-hosting.component';

describe('CustomizeHostingComponent', () => {
  let component: CustomizeHostingComponent;
  let fixture: ComponentFixture<CustomizeHostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeHostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
