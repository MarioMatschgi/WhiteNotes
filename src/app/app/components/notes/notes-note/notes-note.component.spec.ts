import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesNoteComponent } from './notes-note.component';

describe('NotesNoteComponent', () => {
  let component: NotesNoteComponent;
  let fixture: ComponentFixture<NotesNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
