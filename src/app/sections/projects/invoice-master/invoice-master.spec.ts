import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoiceMaster } from './invoice-master';

describe('InvoiceMaster', () => {
  let component: InvoiceMaster;
  let fixture: ComponentFixture<InvoiceMaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceMaster],
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceMaster);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
