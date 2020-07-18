import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionListComponent } from './submission-list.component';
import { HttpService } from 'src/app/http.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

describe('SubmissionListComponent', () => {
  let component: SubmissionListComponent;
  let fixture: ComponentFixture<SubmissionListComponent>;

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
      declarations: [SubmissionListComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const httpService = TestBed.get(HttpService);
    fixture = TestBed.createComponent(SubmissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
