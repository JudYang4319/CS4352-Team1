import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtRepaymentComponent } from './debt-repayment.component';

describe('DebtRepaymentComponent', () => {
  let component: DebtRepaymentComponent;
  let fixture: ComponentFixture<DebtRepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtRepaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtRepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
