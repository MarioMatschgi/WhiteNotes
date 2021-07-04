import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotedownComponent } from './notedown.component';

describe('NotedownComponent', () => {
  let component: NotedownComponent;
  let fixture: ComponentFixture<NotedownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotedownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotedownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
