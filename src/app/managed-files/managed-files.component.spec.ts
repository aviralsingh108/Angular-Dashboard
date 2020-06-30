import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedFilesComponent } from './managed-files.component';

describe('ManagedFilesComponent', () => {
  let component: ManagedFilesComponent;
  let fixture: ComponentFixture<ManagedFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
