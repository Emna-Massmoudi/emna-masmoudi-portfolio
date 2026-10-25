import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EcoNoyaux } from './eco-noyaux';

describe('EcoNoyaux', () => {
  let component: EcoNoyaux;
  let fixture: ComponentFixture<EcoNoyaux>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoNoyaux],
    }).compileComponents();

    fixture = TestBed.createComponent(EcoNoyaux);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
