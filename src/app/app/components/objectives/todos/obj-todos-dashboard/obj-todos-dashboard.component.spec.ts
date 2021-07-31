import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjTodosDashboardComponent } from './obj-todos-dashboard.component';

describe('ObjTodosDashboardComponent', () => {
  let component: ObjTodosDashboardComponent;
  let fixture: ComponentFixture<ObjTodosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjTodosDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjTodosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
