import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinistrePrediction } from './sinistre-prediction';

describe('SinistrePrediction', () => {
  let component: SinistrePrediction;
  let fixture: ComponentFixture<SinistrePrediction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinistrePrediction],
    }).compileComponents();

    fixture = TestBed.createComponent(SinistrePrediction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
