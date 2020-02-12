import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { UploadUserDataComponent } from './upload-user-data/upload-user-data.component';


const routes: Routes = [
  {path:'users', component:DisplayUsersComponent},
  {path:'uploadcsv', component:UploadUserDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
