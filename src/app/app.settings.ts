export class AppSettings {
    /* === HTTP Constants === */
    public static apiHost = "localhost:5001/";
    public static headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    public static getCommentsBySubmissionEndPoint = "api/Comments/Submission/";
}