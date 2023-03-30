import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSyncComponent } from './light-sync.component';

describe('LightSyncComponent', () => {
  let component: LightSyncComponent;
  let fixture: ComponentFixture<LightSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightSyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
