import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss']
})
export class CommentDetailsComponent implements OnInit {
  @Input() comment: Comment;

  constructor() { }

  ngOnInit(): void {
    console.log(this.comment)
  }

}
