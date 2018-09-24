import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MembersComponent } from "./members/members.component";
import { MembersService } from "./services/members.service";
import { HttpModule } from "@angular/http";
import { SortingPipe } from "./shared/sorting.pipe";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
import { MemberEditComponent } from "./members/member-edit/member-edit.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { MemberItemComponent } from "./members/member-list/member-item/member-item.component";
import { MemberWelcomeComponent } from "./members/member-welcome/member-welcome.component";
import { FilterPipe } from "./shared/filter.pipe";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MembersComponent,
    SortingPipe,
    MemberDetailComponent,
    MemberEditComponent,
    MemberListComponent,
    MemberItemComponent,
    MemberWelcomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [ MembersService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
