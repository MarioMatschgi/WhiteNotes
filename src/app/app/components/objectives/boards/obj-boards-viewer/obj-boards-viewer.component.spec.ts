import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjBoardsViewerComponent } from './obj-boards-viewer.component';

describe('ObjBoardsViewerComponent', () => {
  let component: ObjBoardsViewerComponent;
  let fixture: ComponentFixture<ObjBoardsViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjBoardsViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjBoardsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
