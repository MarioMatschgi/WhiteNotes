import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StGridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: StGridComponent;
  let fixture: ComponentFixture<StGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StGridComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
