import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Well } from './well';

describe('Well', () => {
  let component: Well;
  let fixture: ComponentFixture<Well>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Well]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Well);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
