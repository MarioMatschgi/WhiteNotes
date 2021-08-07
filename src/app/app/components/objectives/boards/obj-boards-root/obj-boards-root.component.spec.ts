import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjBoardsRootComponent } from './obj-boards-root.component';

describe('ObjBoardsRootComponent', () => {
  let component: ObjBoardsRootComponent;
  let fixture: ComponentFixture<ObjBoardsRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjBoardsRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjBoardsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
