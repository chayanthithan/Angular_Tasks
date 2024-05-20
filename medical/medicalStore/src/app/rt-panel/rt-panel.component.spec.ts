import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtPanelComponent } from './rt-panel.component';

describe('RtPanelComponent', () => {
  let component: RtPanelComponent;
  let fixture: ComponentFixture<RtPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RtPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RtPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
