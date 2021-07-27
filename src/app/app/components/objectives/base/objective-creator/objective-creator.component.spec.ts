import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveCreatorComponent } from './objective-creator.component';

describe('ObjectiveCreatorComponent', () => {
  let component: ObjectiveCreatorComponent;
  let fixture: ComponentFixture<ObjectiveCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
