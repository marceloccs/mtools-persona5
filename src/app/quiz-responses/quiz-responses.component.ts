import { Component, OnInit } from '@angular/core';
import { ClassroomQuizModel } from "src/module/classrom-quiz-model";

import { combineLatest, Observable } from 'rxjs';
import { combineAll, map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { QuizResponseData } from 'src/data/quiz-responses/quiz-responses-data';
import { CombineLatestSubscriber } from 'rxjs/internal/observable/combineLatest';


@Component({
  selector: 'app-quiz-responses',
  templateUrl: './quiz-responses.component.html',
  styleUrls: ['./quiz-responses.component.sass']
})
export class QuizResponsesComponent implements OnInit {

  responses$: Observable<ClassroomQuizModel[]>;
  filterQuestions = new FormControl('');
  filterExams = new FormControl(false);

  constructor() {
    this.responses$ = CombineLatestSubscriber(
      this.filterExams.valueChanges.pipe(
        startWith(''),
        map(text => searchQuestion(text))
      )
    );
    };
  }

  ngOnInit(): void {
  }

}

function searchQuestion(text: string): ClassroomQuizModel[] {
  return QuizResponseData.filter(data => {
    const term = text.toLowerCase();
    return data.question.toLowerCase().includes(term)
      || data.responseOption.toLowerCase().includes(term);
  }).sort(comparerData);
}

function searchExams(value: boolean): ClassroomQuizModel[] {
  return QuizResponseData.filter(data => {
    if(value){
      return data.exame;
    }
    return data;
  }).sort(comparerData);
}

function comparerData(a: ClassroomQuizModel, b: ClassroomQuizModel) {
  var baseNumber = 0;
  if (a.newYear && !b.newYear) baseNumber = baseNumber + 4;
  else if (!a.newYear && b.newYear) baseNumber = baseNumber - 4;

  if (a.month<b.month) baseNumber = baseNumber + 2;
  else if (a.month>b.month) baseNumber = baseNumber - 2;

  if (a.day < b.day) baseNumber = baseNumber + 1;
  else if (a.day > b.day) baseNumber = baseNumber - 1;

  return (baseNumber)*-1;
}
