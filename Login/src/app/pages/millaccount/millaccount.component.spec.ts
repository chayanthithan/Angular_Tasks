import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MillaccountComponent } from './millaccount.component';

describe('MillaccountComponent', () => {
  let component: MillaccountComponent;
  let fixture: ComponentFixture<MillaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MillaccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MillaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
