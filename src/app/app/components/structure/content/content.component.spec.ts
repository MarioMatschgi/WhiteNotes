import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StContentComponent } from './content.component';

describe('ContentComponent', () => {
  let component: StContentComponent;
  let fixture: ComponentFixture<StContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
