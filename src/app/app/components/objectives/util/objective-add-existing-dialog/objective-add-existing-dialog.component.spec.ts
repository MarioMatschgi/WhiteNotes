import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveAddExistingDialogComponent } from './objective-add-existing-dialog.component';

describe('ObjectiveAddExistingDialogComponent', () => {
  let component: ObjectiveAddExistingDialogComponent;
  let fixture: ComponentFixture<ObjectiveAddExistingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveAddExistingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveAddExistingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
