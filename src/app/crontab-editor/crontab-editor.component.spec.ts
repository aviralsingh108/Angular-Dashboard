import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrontabEditorComponent } from './crontab-editor.component';

describe('CrontabEditorComponent', () => {
  let component: CrontabEditorComponent;
  let fixture: ComponentFixture<CrontabEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrontabEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrontabEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
