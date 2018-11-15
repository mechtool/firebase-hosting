import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectCloudFunctionsComponent } from './connect-cloud-functions.component';

describe('ConnectCloudFunctionsComponent', () => {
  let component: ConnectCloudFunctionsComponent;
  let fixture: ComponentFixture<ConnectCloudFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectCloudFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectCloudFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
