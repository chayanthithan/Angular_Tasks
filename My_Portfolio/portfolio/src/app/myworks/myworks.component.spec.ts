import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyworksComponent } from './myworks.component';

describe('MyworksComponent', () => {
  let component: MyworksComponent;
  let fixture: ComponentFixture<MyworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyworksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
