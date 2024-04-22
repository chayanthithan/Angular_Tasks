import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaccountComponent } from './farmaccount.component';

describe('FarmaccountComponent', () => {
  let component: FarmaccountComponent;
  let fixture: ComponentFixture<FarmaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmaccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
