import { Component, OnInit, Input } from '@angular/core';
import { CommentData } from '../comment-data';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss']
})
export class CommentDetailsComponent implements OnInit {
  @Input() commentData: CommentData;
  constructor() { }

  ngOnInit(): void {
  }

  getCommentMessage() {
    return this.commentData.commentMessage;
  }
}
