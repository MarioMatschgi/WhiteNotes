import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjNotesDashboardComponent } from './obj-notes-dashboard.component';

describe('NotesDashboardComponent', () => {
  let component: ObjNotesDashboardComponent;
  let fixture: ComponentFixture<ObjNotesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObjNotesDashboardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjNotesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
