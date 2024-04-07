import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudTaskComponent } from './shared/components/stud-task/stud-task.component';

@NgModule({
  declarations: [
    AppComponent,
    StudTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
