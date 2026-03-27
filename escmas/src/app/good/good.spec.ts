import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Good } from './good';

describe('Good', () => {
  let component: Good;
  let fixture: ComponentFixture<Good>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Good]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Good);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
