import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamTaskMenuComponent} from './team-task-menu/team-task-menu.component';
import { TaskOverviewMenuComponent } from './task-overview-menu/task-overview-menu.component';

const routes: Routes = [
  {path:"", redirectTo:"SignIn", pathMatch:"full"},
  {path:"SignIn", component:SignInComponent},
  {path:"SignUp", component:SignUpComponent},
  {path:"TeamTask", component : TeamTaskMenuComponent},
  {path:"TaskOverview", component : TaskOverviewMenuComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }