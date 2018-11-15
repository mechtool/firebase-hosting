import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectCustomDomainComponent } from './connect-custom-domain.component';

describe('ConnectCustomDomainComponent', () => {
  let component: ConnectCustomDomainComponent;
  let fixture: ComponentFixture<ConnectCustomDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectCustomDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectCustomDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
