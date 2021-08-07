import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StSectionComponent } from './st-section.component';

describe('SectionComponent', () => {
  let component: StSectionComponent;
  let fixture: ComponentFixture<StSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
