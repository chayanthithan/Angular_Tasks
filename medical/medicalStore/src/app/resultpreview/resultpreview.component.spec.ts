import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultpreviewComponent } from './resultpreview.component';

describe('ResultpreviewComponent', () => {
  let component: ResultpreviewComponent;
  let fixture: ComponentFixture<ResultpreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultpreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
