import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeQualificationComponent } from './employee-qualification.component';

describe('EmployeeQualificationComponent', () => {
  let component: EmployeeQualificationComponent;
  let fixture: ComponentFixture<EmployeeQualificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeQualificationComponent]
    });
    fixture = TestBed.createComponent(EmployeeQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
