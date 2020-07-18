import { Component, OnInit, Input } from '@angular/core';
import { Submission } from '../submission';

@Component({
  selector: 'app-submission-details',
  templateUrl: './submission-details.component.html',
  styleUrls: ['./submission-details.component.scss']
})
export class SubmissionDetailsComponent implements OnInit {
  @Input() submission: Submission;
  _hideCommentsText = "Hide Comments";
  _showCommentsText = "Show Comments";
  displayCommentsList: boolean = false;
  displayCommentsListText: string = this._showCommentsText;

  constructor() { }

  ngOnInit(): void {
  }

  dateFromUTCString(dateString) {
    dateString = dateString.split(/[-T:Z]/ig);
    var date = new Date(Date.UTC(dateString[0], --dateString[1], dateString[2], dateString[3], dateString[4], dateString[5]));
    return date.toLocaleString();
  }

  toggleCommentsList(){
    this.displayCommentsList = !this.displayCommentsList;
    if(this.displayCommentsList)
    {
      this.displayCommentsListText = this._hideCommentsText;
    } else {
      this.displayCommentsListText = this._showCommentsText;
    }
  }

}
