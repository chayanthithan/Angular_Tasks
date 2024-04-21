import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseKeepingAccountComponent } from './house-keeping-account.component';

describe('HouseKeepingAccountComponent', () => {
  let component: HouseKeepingAccountComponent;
  let fixture: ComponentFixture<HouseKeepingAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseKeepingAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HouseKeepingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
