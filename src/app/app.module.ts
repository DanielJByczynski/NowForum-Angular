import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmissionListComponent } from './Submission/submission-list/submission-list.component';
import { CreateSubmissionComponent } from './Submission/create-submission/create-submission.component';
import { SubmissionDetailComponent } from './Submission/submission-detail/submission-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmissionListComponent,
    CreateSubmissionComponent,
    SubmissionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
