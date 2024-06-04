import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewTeacherComponent } from './addnew-teacher.component';

describe('AddnewTeacherComponent', () => {
  let component: AddnewTeacherComponent;
  let fixture: ComponentFixture<AddnewTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddnewTeacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddnewTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
