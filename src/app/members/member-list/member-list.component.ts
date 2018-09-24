import { Component, OnInit, Input, OnDestroy, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { Member } from "../../shared/member.model";
import { MembersService } from "../../services/members.service";

@Component({
  selector: "app-member-list",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.css"]
})
export class MemberListComponent implements OnInit, OnDestroy {
  filteredStatus: string;
  members = [];
  sortDirection = false;
  sortVal = "";
  memberSubscription: Subscription;
  public checkedReference = MemberListComponent;
  static checked = false;
  constructor(private memberService: MembersService) {}

  ngOnInit() {
    this.memberService.getMembers().subscribe((members: any) => {
      this.members = members;
    });
    this.memberSubscription = this.memberService.membersAdded.subscribe(
      (newmembers: Member[]) => {
        this.members = newmembers;
      }
    );
    
  }
  sortit() {
    this.sortDirection = !this.sortDirection;
  }
   selectedall() {
    MemberListComponent.checked != MemberListComponent.checked;
    this.members.forEach(elements => {
      if (MemberListComponent.checked) {
        elements.selected = true;
      } else {
        elements.selected = false;
      }
    });
  }
  
  ngOnDestroy() {
    this.memberSubscription.unsubscribe();
  }
}
