import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechSalaryAnalytics } from './tech-salary-analytics';

describe('TechSalaryAnalytics', () => {
  let component: TechSalaryAnalytics;
  let fixture: ComponentFixture<TechSalaryAnalytics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechSalaryAnalytics],
    }).compileComponents();

    fixture = TestBed.createComponent(TechSalaryAnalytics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
