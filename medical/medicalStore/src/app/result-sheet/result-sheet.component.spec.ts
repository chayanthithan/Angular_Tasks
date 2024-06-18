import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSheetComponent } from './result-sheet.component';

describe('ResultSheetComponent', () => {
  let component: ResultSheetComponent;
  let fixture: ComponentFixture<ResultSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
