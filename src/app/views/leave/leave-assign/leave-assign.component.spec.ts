import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveAssignComponent } from './leave-assign.component';

describe('LeaveAssignComponent', () => {
  let component: LeaveAssignComponent;
  let fixture: ComponentFixture<LeaveAssignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveAssignComponent]
    });
    fixture = TestBed.createComponent(LeaveAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
