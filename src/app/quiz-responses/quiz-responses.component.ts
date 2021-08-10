import { Component, OnInit } from '@angular/core';
import { ClassroomQuizModel } from "src/module/classrom-quiz-model";

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { QuizResponseData } from 'src/data/quiz-responses/quiz-responses-data';


@Component({
  selector: 'app-quiz-responses',
  templateUrl: './quiz-responses.component.html',
  styleUrls: ['./quiz-responses.component.sass']
})
export class QuizResponsesComponent implements OnInit {

  responses$: Observable<ClassroomQuizModel[]>;
  filter = new FormControl('');

  constructor() {
     this.responses$ = this.filter.valueChanges.pipe(
       startWith(''),
       map(text => searchQuestion(text))
     );
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

 function comparerData(a :ClassroomQuizModel,b :ClassroomQuizModel){
   if(a.day < b.day) return 1;
   if(a.day > b.day) return -1;
   return 0;
 }
