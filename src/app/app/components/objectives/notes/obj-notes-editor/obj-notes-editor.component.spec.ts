import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjNotesEditorComponent } from './obj-notes-editor.component';

describe('ObjNotesEditorComponent', () => {
  let component: ObjNotesEditorComponent;
  let fixture: ComponentFixture<ObjNotesEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjNotesEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjNotesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
