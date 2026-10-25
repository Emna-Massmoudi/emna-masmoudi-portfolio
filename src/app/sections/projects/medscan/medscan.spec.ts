import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Medscan } from './medscan';

describe('Medscan', () => {
  let component: Medscan;
  let fixture: ComponentFixture<Medscan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Medscan],
    }).compileComponents();

    fixture = TestBed.createComponent(Medscan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
