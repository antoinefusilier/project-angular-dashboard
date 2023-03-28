import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleProposalComponent } from './module-proposal.component';

describe('ModuleProposalComponent', () => {
  let component: ModuleProposalComponent;
  let fixture: ComponentFixture<ModuleProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleProposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
