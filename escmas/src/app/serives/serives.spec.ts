import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serives } from './serives';

describe('Serives', () => {
  let component: Serives;
  let fixture: ComponentFixture<Serives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Serives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
