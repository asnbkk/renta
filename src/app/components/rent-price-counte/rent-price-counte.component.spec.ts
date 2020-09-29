import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentPriceCounteComponent } from './rent-price-counte.component';

describe('RentPriceCounteComponent', () => {
  let component: RentPriceCounteComponent;
  let fixture: ComponentFixture<RentPriceCounteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentPriceCounteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentPriceCounteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
