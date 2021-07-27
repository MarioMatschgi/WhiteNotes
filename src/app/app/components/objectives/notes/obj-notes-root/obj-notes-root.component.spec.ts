import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjNotesRootComponent } from './obj-notes-root.component';

describe('ObjNotesRootComponent', () => {
  let component: ObjNotesRootComponent;
  let fixture: ComponentFixture<ObjNotesRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjNotesRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjNotesRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
