import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivaltoSyncComponent } from './divalto-sync.component';

describe('DivaltoSyncComponent', () => {
  let component: DivaltoSyncComponent;
  let fixture: ComponentFixture<DivaltoSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivaltoSyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivaltoSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
