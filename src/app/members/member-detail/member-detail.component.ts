import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../../shared/member.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member: Member;
  id: number;
  constructor(private router: Router,
   private route: ActivatedRoute,
   private memberService: MembersService) { }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.route.params.subscribe((params: Params) => {
     
      this.id = +params["id"];
      this.member = this.memberService.getMember(this.id);
    
    });
  }
  updatemember(){
    this.router.navigate(["edit"],{relativeTo: this.route});
  }
  deletemember(){
    this.memberService.deleteMember(this.id);
    this.router.navigate(['members']);
  }
}
