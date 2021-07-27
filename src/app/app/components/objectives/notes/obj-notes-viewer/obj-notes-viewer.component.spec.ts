import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjNotesViewerComponent } from './obj-notes-viewer.component';

describe('ObjNotesViewerComponent', () => {
  let component: ObjNotesViewerComponent;
  let fixture: ComponentFixture<ObjNotesViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjNotesViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjNotesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
