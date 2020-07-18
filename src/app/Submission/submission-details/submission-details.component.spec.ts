import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionDetailsComponent } from './submission-details.component';
import { HttpService } from 'src/app/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Submission } from '../submission';

describe('SubmissionDetailsComponent', () => {
  let component: SubmissionDetailsComponent;
  let fixture: ComponentFixture<SubmissionDetailsComponent>;
  let submission: Submission = {
    id: 1,
    name: "TEST",
    imageUrl: "Test url",
    message: "Message test.",
    timeStamp: null,
    hasBeenEdited: false,
    editTimeStamp: null

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({      
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
      ],
      providers: [
        HttpService,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
      ],
      declarations: [SubmissionDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  @Component({
    selector: `submission-details-component`,
    template: `<app-submission-details-component input="` + submission + `"></app-submission-details-component>`
  })
  class SubmissionDetailsComponent {
  }
});
