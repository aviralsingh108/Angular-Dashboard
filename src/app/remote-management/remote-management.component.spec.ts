import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteManagementComponent } from './remote-management.component';

describe('RemoteManagementComponent', () => {
  let component: RemoteManagementComponent;
  let fixture: ComponentFixture<RemoteManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
