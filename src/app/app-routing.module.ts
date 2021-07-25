import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EletricChairComponent } from './eletric-chair/eletric-chair.component';

const routes: Routes = [
  { path :'eletric-chair', component: EletricChairComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
