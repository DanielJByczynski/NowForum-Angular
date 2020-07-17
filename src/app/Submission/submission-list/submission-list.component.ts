import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Submission } from '../submission';

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.scss']
})
export class SubmissionListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("run")
  }


}
