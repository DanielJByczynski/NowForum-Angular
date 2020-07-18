import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Submission } from '../submission';
import { FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { $ } from 'protractor';
@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.scss']
})
export class SubmissionListComponent implements OnInit {
  submissions$: Observable<Submission[]>;
  submissionForm;

  constructor(
    private httpService: HttpService,
    private formBuilder: FormBuilder) {
    this.submissionForm = this.formBuilder.group({
      name: '',
      imageUrl: '',
      message: ''
    });
  }

  ngOnInit(): void {
    this.getSubmissions();
  }

  getSubmissions() {
    this.submissions$ = this.httpService.getSubmissions();
  }

  addSubmission(submissionData) {
    this.httpService.postSubmission(submissionData).subscribe(() => {
      this.getSubmissions();
    });
  }

}
