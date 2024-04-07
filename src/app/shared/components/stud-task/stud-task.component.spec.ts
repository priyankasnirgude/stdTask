import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudTaskComponent } from './stud-task.component';

describe('StudTaskComponent', () => {
  let component: StudTaskComponent;
  let fixture: ComponentFixture<StudTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
