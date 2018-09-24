import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MemberEditComponent } from "./members/member-edit/member-edit.component";
import { MembersComponent } from "./members/members.component";
import { MemberWelcomeComponent } from "./members/member-welcome/member-welcome.component";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/members", pathMatch: "full" },
  {
    path: "members",
    component: MembersComponent,
    children: [
      { path: "", component: MemberWelcomeComponent },
      { path: ":id/:name", component: MemberDetailComponent },
      { path: ":id/:name/edit", component: MemberEditComponent }
    ]
  },
  {
    path: "not-found",
    component: MembersComponent
  },
  { path: "**", redirectTo: "/not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
