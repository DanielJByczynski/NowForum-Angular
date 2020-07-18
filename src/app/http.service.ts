import { HttpClient } from '@angular/common/http';
import { AppSettings } from './app.settings';
import { Injectable } from '@angular/core';

@Injectable() 
export class HttpService {
    
    constructor(private http: HttpClient) {
    }

    getHttp(endPoint) {
        return this.http.get<any>(
            AppSettings.apiHost + endPoint,
            {
                headers: AppSettings.headers,
                observe: 'body',
                responseType: 'json'
            });
    }

    getCommentsBySubmissionId(submissionId) {
        return this.getHttp("/api/comments/submission/" + submissionId);
    }
}