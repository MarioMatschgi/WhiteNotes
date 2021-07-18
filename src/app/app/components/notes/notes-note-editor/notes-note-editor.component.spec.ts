import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesNoteEditorComponent } from './notes-note-editor.component';

describe('NotesNoteEditorComponent', () => {
  let component: NotesNoteEditorComponent;
  let fixture: ComponentFixture<NotesNoteEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesNoteEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesNoteEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
