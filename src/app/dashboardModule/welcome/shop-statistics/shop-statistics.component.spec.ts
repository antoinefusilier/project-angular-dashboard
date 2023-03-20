import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopStatisticsComponent } from './shop-statistics.component';

describe('ShopStatisticsComponent', () => {
  let component: ShopStatisticsComponent;
  let fixture: ComponentFixture<ShopStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
