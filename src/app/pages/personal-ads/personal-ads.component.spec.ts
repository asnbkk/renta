import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAdsComponent } from './personal-ads.component';

describe('PersonalAdsComponent', () => {
  let component: PersonalAdsComponent;
  let fixture: ComponentFixture<PersonalAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
