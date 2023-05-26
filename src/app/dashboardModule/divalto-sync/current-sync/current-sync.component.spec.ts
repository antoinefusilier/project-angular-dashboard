import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSyncComponent } from './current-sync.component';

describe('CurrentSyncComponent', () => {
  let component: CurrentSyncComponent;
  let fixture: ComponentFixture<CurrentSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentSyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
