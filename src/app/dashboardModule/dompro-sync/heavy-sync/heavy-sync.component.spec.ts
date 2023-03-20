import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavySyncComponent } from './heavy-sync.component';

describe('HeavySyncComponent', () => {
  let component: HeavySyncComponent;
  let fixture: ComponentFixture<HeavySyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeavySyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeavySyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
