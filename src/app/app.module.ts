import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EletricChairComponent } from './eletric-chair/eletric-chair.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { YesNoPipe } from './yes-no.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EletricChairComponent,
    YesNoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
