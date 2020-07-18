import { Component, OnInit, Input } from '@angular/core';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { CommentData } from '../comment-data';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input() submissionId: number;
  comments$: Observable<CommentData[]>;
  commentForm;

  constructor(
    private httpService: HttpService,
    private formBuilder: FormBuilder
    ) {
    this.commentForm = this.formBuilder.group({
      commentMessage: ''
    });
  }

  ngOnInit(): void {    
    this.getComments();
  }

  getComments() {
    this.comments$ = this.httpService.getCommentsBySubmissionId(this.submissionId);
  }

  addComment(commentData) {
    this.httpService.postComment(this.submissionId, commentData.commentMessage).subscribe(() => {
      this.getComments();
    });
    this.commentForm.reset();
  }
}
