import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosTodoComponent } from './todos-todo.component';

describe('TodosTodoComponent', () => {
  let component: TodosTodoComponent;
  let fixture: ComponentFixture<TodosTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
