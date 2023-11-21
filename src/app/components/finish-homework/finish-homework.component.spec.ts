import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishHomeworkComponent } from './finish-homework.component';

describe('FinishHomeworkComponent', () => {
  let component: FinishHomeworkComponent;
  let fixture: ComponentFixture<FinishHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishHomeworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
