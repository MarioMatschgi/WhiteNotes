import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjTodosCreatorComponent } from './obj-todos-creator.component';

describe('ObjTodosCreatorComponent', () => {
  let component: ObjTodosCreatorComponent;
  let fixture: ComponentFixture<ObjTodosCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjTodosCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjTodosCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
