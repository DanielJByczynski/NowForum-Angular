import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input() submissionId: number;
  comments$: Observable<Comment[]>;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {    
    this.getComments();
  }

  getComments() {
    this.comments$ = this.http.get<Comment[]>("https://localhost:5001/api/Comments/Submission/" + this.submissionId, {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},observe: 'body', responseType: 'json'});
  }

  addComment() {
    
  }
}
