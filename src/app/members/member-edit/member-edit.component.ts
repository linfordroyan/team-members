import { Component, OnInit } from "@angular/core";
import { MembersService } from "../../services/members.service";
import { DatePipe } from "@angular/common";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Member } from "../../shared/member.model";

@Component({
  selector: "app-member-edit",
  templateUrl: "./member-edit.component.html",
  styleUrls: ["./member-edit.component.css"]
})
export class MemberEditComponent implements OnInit {
  date = new Date();
  myDate: string;
  signupForm: FormGroup;
  member: Member;
  id: number;
  constructor(
    private memberService: MembersService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private router: Router
  ) {
    this.myDate = this.datePipe.transform(this.date, "yyyy-MM-dd");
  }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.member = this.memberService.getMember(this.id);
      this.initform();
    });
  }
  initform() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl(this.member.name, [Validators.required]),
        company: new FormControl(this.member.company, [Validators.required]),
        status: new FormControl(this.member.status, [Validators.required]),
        note: new FormControl(this.member.notes, [Validators.required])
      })
    });
  }
  closepopup() {
    this.memberService.closePopup();
  }
  onSubmit() {
    this.member = new Member(
      this.signupForm.value.userData["name"],
      this.signupForm.value.userData["name"],
      this.signupForm.value.userData["company"],
      this.signupForm.value.userData["status"],
      this.myDate,
      this.signupForm.value.userData["note"]
    );
    this.memberService.updateMembers(this.id, this.member);
    console.log(this.signupForm.value.userData["name"], this.date);
    this.signupForm.reset();
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
