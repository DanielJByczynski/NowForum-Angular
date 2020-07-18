import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDetailsComponent } from './comment-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/http.service';
import { CommentData } from '../comment-data';
import { Component } from '@angular/core';

describe('CommentDetailsComponent', () => {
  let component: CommentDetailsComponent;
  let fixture: ComponentFixture<CommentDetailsComponent>;
  let commentData: CommentData = {
    id: 1,
    submissionId: 1,
    imageUrl: "",
    commentMessage: "Test Comment",
    timeStamp: null
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
      declarations: [CommentDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  @Component({
    selector: `comment-details-component`,
    template: `<app-comment-details-component input="` + commentData + `"></app-comment-details-component>`
  })
  class CommentDetailsComponent {
  }
});
