import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjTodosEditorComponent } from './obj-todos-editor.component';

describe('ObjTodosEditorComponent', () => {
  let component: ObjTodosEditorComponent;
  let fixture: ComponentFixture<ObjTodosEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjTodosEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjTodosEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
