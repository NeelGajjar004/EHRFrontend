import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDocumentComponent } from './employee-document.component';

describe('EmployeeDocumentComponent', () => {
  let component: EmployeeDocumentComponent;
  let fixture: ComponentFixture<EmployeeDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDocumentComponent]
    });
    fixture = TestBed.createComponent(EmployeeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
