import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMenubar } from './task-menubar';

describe('TaskMenubar', () => {
  let component: TaskMenubar;
  let fixture: ComponentFixture<TaskMenubar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskMenubar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskMenubar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
