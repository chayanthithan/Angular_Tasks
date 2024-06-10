import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportpreviewComponent } from './reportpreview.component';

describe('ReportpreviewComponent', () => {
  let component: ReportpreviewComponent;
  let fixture: ComponentFixture<ReportpreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportpreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
