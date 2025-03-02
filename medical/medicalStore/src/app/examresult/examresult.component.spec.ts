import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamresultComponent } from './examresult.component';

describe('ExamresultComponent', () => {
  let component: ExamresultComponent;
  let fixture: ComponentFixture<ExamresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamresultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
