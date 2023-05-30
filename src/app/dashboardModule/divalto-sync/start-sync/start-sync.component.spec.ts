import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSyncComponent } from './start-sync.component';

describe('StartSyncComponent', () => {
  let component: StartSyncComponent;
  let fixture: ComponentFixture<StartSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
