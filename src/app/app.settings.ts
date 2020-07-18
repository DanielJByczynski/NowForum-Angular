export class AppSettings {
    /* === HTTP Constants === */

    public static apiHost = "https://localhost:5001/";

    public static headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    public static getSubmissionsEndPoint = "api/Submissions";
    public static getCommentsBySubmissionIdEndPoint = "api/Comments/Submission/";
    public static postSubmissionEndPoint = "api/Submissions"
    public static postCommentEndPoint = "api/comments";
}