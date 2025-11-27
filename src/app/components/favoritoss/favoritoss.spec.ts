import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Favoritoss } from './favoritoss';

describe('Favoritoss', () => {
  let component: Favoritoss;
  let fixture: ComponentFixture<Favoritoss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Favoritoss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Favoritoss);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
