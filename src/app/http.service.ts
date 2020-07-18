import { HttpClient } from '@angular/common/http';
import { AppSettings } from './app.settings';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) {
    }

    /* === GET Requests === */
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
        return this.getHttp(
            AppSettings.getCommentsBySubmissionIdEndPoint +
            submissionId);
    }

    /* === POST Requests === */
    postHttp(body, endPoint) {
        console.log("2")
        this.http.post<any>(
            AppSettings.apiHost + endPoint,
            body,
            {
                headers: { 
                    'Accept': 'application/json', 
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset=utf8' }
            }).subscribe((data) => {
                console.log(data)
            });
    }

    postComment(submissionId: number, message: string) {
        console.log(message)
        return this.postHttp(
            JSON.stringify({
                submissionId: Number(submissionId),
                commentMessage: message
            }),
            AppSettings.postCommentEndPoint
        );
    }
}