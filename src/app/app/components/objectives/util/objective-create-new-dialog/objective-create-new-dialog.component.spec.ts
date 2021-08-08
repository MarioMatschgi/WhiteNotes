import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveCreateNewDialogComponent } from './objective-create-new-dialog.component';

describe('ObjectiveCreateNewDialogComponent', () => {
  let component: ObjectiveCreateNewDialogComponent;
  let fixture: ComponentFixture<ObjectiveCreateNewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveCreateNewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveCreateNewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
