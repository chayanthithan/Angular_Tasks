import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPreviewComponent } from './teacher-preview.component';

describe('TeacherPreviewComponent', () => {
  let component: TeacherPreviewComponent;
  let fixture: ComponentFixture<TeacherPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
