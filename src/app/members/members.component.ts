import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MembersService } from '../services/members.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Member } from '../shared/member.model';

import { DatePipe} from '@angular/common';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit, OnDestroy {
  
  showpopup = false;
  sortDirection = false;
  popupSubscription: Subscription;
  signupForm: FormGroup;
  member: Member;
  date= new Date();
  myDate: string;
  constructor(private memberService: MembersService,
    private datePipe: DatePipe,
    ) {
      this.myDate = this.datePipe.transform(this.date, 'yyyy-MM-dd');
     }

  ngOnInit() {
    
    this.popupSubscription = this.memberService.addMemberChanged.subscribe(
      (show: boolean) => {
        this.showpopup = show;
      }
    );
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl(null, [Validators.required]),
        company: new FormControl(null, [Validators.required] ),
        status: new FormControl(null, [Validators.required] ),
        note: new FormControl(null, [Validators.required] ),
      })
    });
  }
 
  closepopup(){
    this.memberService.closePopup();
  }
  onSubmit() {
    this.member = new Member(this.signupForm.value.userData['name'],
    this.signupForm.value.userData['name'],
    this.signupForm.value.userData['company'],
    this.signupForm.value.userData['status'],
    this.myDate,
    this.signupForm.value.userData['note']);
    this.memberService.addMembers(this.member);
    console.log(this.signupForm.value.userData["name"],this.date);
    this.signupForm.reset();
    this.closepopup();
  }
  ngOnDestroy(){
    this.popupSubscription.unsubscribe();
  }
}
