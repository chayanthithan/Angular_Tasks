import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExamresultComponent } from './add-examresult.component';

describe('AddExamresultComponent', () => {
  let component: AddExamresultComponent;
  let fixture: ComponentFixture<AddExamresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExamresultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddExamresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
