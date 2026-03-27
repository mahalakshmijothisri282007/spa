import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class CommentService{
    userName='mahalakshmi';
    collegeName='sri krishna college of engineering and technology';
getUserName(){
    return this.userName;
}
getCollegeName(){
    return this.collegeName;
}
}