import { Injectable} from '@angular/core';
// import axios from 'axios';
import { Subject, Subscription,  } from 'rxjs';
import { map } from 'rxjs/operators';
import { Member } from '../shared/member.model';
import { Http, Response } from '@angular/http';
let user = [];

// axios.get("member.json")
//     .then(res => {
//         console.log(res);
//         user = res.data["memberDetails"];
//     })
//     .catch(err => {
//         console.log(err);
//     });

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  addMemberChanged = new Subject<boolean>();
  userdetailUpdated = new Subject()
  userdetails=[];
  addMember=false;
  membersAdded = new Subject<Member[]>();
  constructor(private http: Http) { }
 
  showPopup(){
    this.addMember = true;
    this.addMemberChanged.next(this.addMember);
  }
  closePopup(){
    this.addMember = false;
    this.addMemberChanged.next(this.addMember);
  }
 
  addMembers(user: Member){
    this.userdetails.push(user);
    this.membersAdded.next(this.userdetails);
  }
  
  
  getMembers(){
    // this.userdetails = user;
    // return this.userdetails;
    return this.http.get('member.json').pipe(
      map((response: Response) => {
        const user = response.json();
        this.userdetails = user['memberDetails'];
        return this.userdetails;
      } )
    );
  }
  getMember(index: number){
    console.log(this.userdetails[index]);
    return this.userdetails[index];
  }
  updateMembers(index:number, member:Member){
    this.userdetails[index] = member;
    this.membersAdded.next(this.userdetails);
  }
  deleteMember(index: number){
    this.userdetails.splice(index,1);
    this.membersAdded.next(this.userdetails);
  }
  getMembersLength(){
    return this.userdetails.length;
  }
}
