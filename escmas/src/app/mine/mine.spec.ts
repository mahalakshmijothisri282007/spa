import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mine } from './mine';

describe('Mine', () => {
  let component: Mine;
  let fixture: ComponentFixture<Mine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
