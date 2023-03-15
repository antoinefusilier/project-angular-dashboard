import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSyncComponent } from './last-sync.component';

describe('LastSyncComponent', () => {
  let component: LastSyncComponent;
  let fixture: ComponentFixture<LastSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastSyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
