import { HttpClient } from '@angular/common/http';
import { AppSettings } from './app.settings';
import { Injectable } from '@angular/core';
import { Submission } from './Submission/submission';

@Injectable()
export class HttpService {
    constructor(
        private http: HttpClient) {
    }

    /* === GET Requests === */
    getHttp(endPoint) {
        console.log(endPoint)
        return this.http.get<any>(
            AppSettings.apiHost + endPoint,
            {
                headers: AppSettings.headers,
                observe: 'body',
                responseType: 'json'
            });
    }

    getSubmissions() {
        return this.getHttp(
            AppSettings.getSubmissionsEndPoint
        );
    }

    getCommentsBySubmissionId(submissionId) {
        return this.getHttp(
            AppSettings.getCommentsBySubmissionIdEndPoint +
            submissionId);
    }

    /* === POST Requests === */
    postHttp(body, endPoint) {
        return this.http.post<any>(
            AppSettings.apiHost + endPoint,
            body,
            {
                headers: { 
                    'Accept': 'application/json', 
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset=utf8' }
            });
    }

    postSubmission(submissionData: Submission) {
        return this.postHttp(
            JSON.stringify({
                name: submissionData.name,
                imageUrl: submissionData.imageUrl,
                message: submissionData.message
            }),
            AppSettings.postSubmissionEndPoint
        );
    }

    postComment(submissionId: number, message: string) {
        return this.postHttp(
            JSON.stringify({
                submissionId: Number(submissionId),
                commentMessage: message
            }),
            AppSettings.postCommentEndPoint
        );
    }
}