import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTransactionComponent } from './leave-transaction.component';

describe('LeaveTransactionComponent', () => {
  let component: LeaveTransactionComponent;
  let fixture: ComponentFixture<LeaveTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveTransactionComponent]
    });
    fixture = TestBed.createComponent(LeaveTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
