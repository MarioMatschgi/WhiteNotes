import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosDashboardComponent } from './todos-dashboard.component';

describe('TodosDashboardComponent', () => {
  let component: TodosDashboardComponent;
  let fixture: ComponentFixture<TodosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
