import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmissionListComponent } from './Submission/submission-list/submission-list.component';
import { SubmissionDetailsComponent } from './Submission/submission-details/submission-details.component';
import { CommentListComponent } from './Submission/Comment/comment-list/comment-list.component';
import { CommentDetailsComponent } from './Submission/Comment/comment-details/comment-details.component';
import { FormBuilder } from '@angular/forms';
import { HttpService } from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    SubmissionListComponent,
    SubmissionDetailsComponent,
    CommentListComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [    
    HttpService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
