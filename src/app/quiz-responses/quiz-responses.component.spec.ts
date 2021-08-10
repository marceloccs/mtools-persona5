import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizResponsesComponent } from './quiz-responses.component';

describe('QuizResponsesComponent', () => {
  let component: QuizResponsesComponent;
  let fixture: ComponentFixture<QuizResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizResponsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
