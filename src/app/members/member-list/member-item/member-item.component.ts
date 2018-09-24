import { Component, OnInit, Input } from "@angular/core";
import { Member } from "../../../shared/member.model";
import {MemberListComponent} from "../member-list.component";
@Component({
  selector: "app-member-item",
  templateUrl: "./member-item.component.html",
  styleUrls: ["./member-item.component.css"]
})
export class MemberItemComponent implements OnInit {
  @Input()
  index: number;
  @Input()
  member: Member;
 memberLength: number;
  constructor() {}

  ngOnInit() {}
  deselct(val){
    val.selected != val.selected;
    if(val.selected === false){
      MemberListComponent.checked = false;
    }
  }
}
