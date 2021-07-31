import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjNotesCreatorComponent } from './obj-notes-creator.component';

describe('ObjNotesCreatorComponent', () => {
  let component: ObjNotesCreatorComponent;
  let fixture: ComponentFixture<ObjNotesCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjNotesCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjNotesCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
