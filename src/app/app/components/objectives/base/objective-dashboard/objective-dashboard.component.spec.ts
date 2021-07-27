import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveDashboardComponent } from './objective-dashboard.component';

describe('ObjectiveDashboardComponent', () => {
  let component: ObjectiveDashboardComponent;
  let fixture: ComponentFixture<ObjectiveDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
