import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjBoardsCreatorComponent } from './obj-boards-creator.component';

describe('ObjBoardsCreatorComponent', () => {
  let component: ObjBoardsCreatorComponent;
  let fixture: ComponentFixture<ObjBoardsCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjBoardsCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjBoardsCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
