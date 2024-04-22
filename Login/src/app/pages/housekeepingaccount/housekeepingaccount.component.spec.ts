import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeepingaccountComponent } from './housekeepingaccount.component';

describe('HousekeepingaccountComponent', () => {
  let component: HousekeepingaccountComponent;
  let fixture: ComponentFixture<HousekeepingaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HousekeepingaccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HousekeepingaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
