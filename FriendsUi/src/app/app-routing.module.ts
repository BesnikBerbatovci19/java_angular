import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { FriendComponent } from './friend/friend.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'friends', component: FriendComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
