import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosNewComponent } from './todos-base.component';

describe('TodosNewComponent', () => {
  let component: TodosNewComponent;
  let fixture: ComponentFixture<TodosNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosNewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
