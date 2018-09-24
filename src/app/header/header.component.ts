import { Component, OnInit } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private memberService: MembersService) { }

  ngOnInit() {
  }
  onAddmember(){
    this.memberService.showPopup();
  }
  onClose(){
    this.memberService.closePopup();
  }
}
