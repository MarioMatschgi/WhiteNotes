import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjBoardsDashboardComponent } from './obj-boards-dashboard.component';

describe('ObjBoardsDashboardComponent', () => {
  let component: ObjBoardsDashboardComponent;
  let fixture: ComponentFixture<ObjBoardsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjBoardsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjBoardsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
