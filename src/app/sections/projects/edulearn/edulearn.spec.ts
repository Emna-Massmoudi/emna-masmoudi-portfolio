import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Edulearn } from './edulearn';

describe('Edulearn', () => {
  let component: Edulearn;
  let fixture: ComponentFixture<Edulearn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Edulearn],
    }).compileComponents();

    fixture = TestBed.createComponent(Edulearn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
