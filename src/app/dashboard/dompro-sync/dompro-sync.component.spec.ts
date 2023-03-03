import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomproSyncComponent } from './dompro-sync.component';

describe('DomproSyncComponent', () => {
  let component: DomproSyncComponent;
  let fixture: ComponentFixture<DomproSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomproSyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomproSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
