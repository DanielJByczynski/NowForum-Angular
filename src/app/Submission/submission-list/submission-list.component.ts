import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Submission } from '../submission';
@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.scss']
})
export class SubmissionListComponent implements OnInit {

  submissions$: Observable<Submission[]>;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getSubmissions();
  }

  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }

  getSubmissions() {
    this.submissions$ = this.http.get<Submission[]>("https://localhost:5001/api/submissions", {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},observe: 'body', responseType: 'json'});
  }



}
