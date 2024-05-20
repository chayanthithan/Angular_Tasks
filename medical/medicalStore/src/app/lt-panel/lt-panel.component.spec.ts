import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtPanelComponent } from './lt-panel.component';

describe('LtPanelComponent', () => {
  let component: LtPanelComponent;
  let fixture: ComponentFixture<LtPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LtPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LtPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
