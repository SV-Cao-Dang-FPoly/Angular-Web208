import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUpdateComponent } from './customer-update.component';

describe('CustomerUpdateComponent', () => {
  let component: CustomerUpdateComponent;
  let fixture: ComponentFixture<CustomerUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerUpdateComponent]
    });
    fixture = TestBed.createComponent(CustomerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
