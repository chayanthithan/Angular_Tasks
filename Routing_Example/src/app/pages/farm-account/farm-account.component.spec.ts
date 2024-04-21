import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmAccountComponent } from './farm-account.component';

describe('FarmAccountComponent', () => {
  let component: FarmAccountComponent;
  let fixture: ComponentFixture<FarmAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
