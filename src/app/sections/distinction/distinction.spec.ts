import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Distinction } from './distinction';

describe('Distinction', () => {
  let component: Distinction;
  let fixture: ComponentFixture<Distinction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Distinction],
    }).compileComponents();

    fixture = TestBed.createComponent(Distinction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
