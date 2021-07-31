import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjTodosRootComponent } from './obj-todos-root.component';

describe('ObjTodosRootComponent', () => {
  let component: ObjTodosRootComponent;
  let fixture: ComponentFixture<ObjTodosRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjTodosRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjTodosRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
