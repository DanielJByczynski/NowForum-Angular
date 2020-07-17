export interface Submission {
    id: number;
    imageUrl: string;
    message: string;
    timeStamp: Date;
    hasBeenEdited: boolean;
    editTimeStamp: Date;
}