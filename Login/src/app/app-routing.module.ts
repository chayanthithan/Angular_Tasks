import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainaccountComponent } from './pages/mainaccount/mainaccount.component';
import { MainmenuComponent } from './pages/mainmenu/mainmenu.component';
import { FarmaccountComponent } from './pages/farmaccount/farmaccount.component';
import { MillaccountComponent } from './pages/millaccount/millaccount.component';
import { HousekeepingaccountComponent } from './pages/housekeepingaccount/housekeepingaccount.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },{
    path:'main-account',
    component:MainaccountComponent
  },{
    path:'main-menu',
    component:MainmenuComponent
  },{
    path:'farm-account',
    component:FarmaccountComponent
  },{
    path:'house-keeping-account',
    component:HousekeepingaccountComponent
  },{
    path:'mill-account',
    component:MillaccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
