import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjTodosViewerComponent } from './obj-todos-viewer.component';

describe('ObjTodosViewerComponent', () => {
  let component: ObjTodosViewerComponent;
  let fixture: ComponentFixture<ObjTodosViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjTodosViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjTodosViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
