import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EletricChairComponent } from './eletric-chair/eletric-chair.component';
import { QuizResponsesComponent } from './quiz-responses/quiz-responses.component';

const routes: Routes = [
  { path :'eletric-chair', component: EletricChairComponent},
  { path :'quiz-responses', component: QuizResponsesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
