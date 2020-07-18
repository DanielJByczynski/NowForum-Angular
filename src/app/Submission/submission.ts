export interface Submission {
    id: number;
    name: string;
    imageUrl: string;
    message: string;
    timeStamp: Date;
    hasBeenEdited: boolean;
    editTimeStamp: Date;
}