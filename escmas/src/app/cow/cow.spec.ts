import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cow } from './cow';

describe('Cow', () => {
  let component: Cow;
  let fixture: ComponentFixture<Cow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
