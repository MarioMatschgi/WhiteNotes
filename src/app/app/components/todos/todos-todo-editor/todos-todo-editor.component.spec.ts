import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosTodoEditorComponent } from './todos-todo-editor.component';

describe('TodosTodoEditorComponent', () => {
  let component: TodosTodoEditorComponent;
  let fixture: ComponentFixture<TodosTodoEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosTodoEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosTodoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
