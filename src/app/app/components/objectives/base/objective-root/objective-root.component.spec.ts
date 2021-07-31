import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveRootComponent } from './objective-root.component';

describe('ObjectiveRootComponent', () => {
  let component: ObjectiveRootComponent;
  let fixture: ComponentFixture<ObjectiveRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
