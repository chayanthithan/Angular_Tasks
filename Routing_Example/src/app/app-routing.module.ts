import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainmenuComponent } from './pages/mainmenu/mainmenu.component';
import { MainAccountComponent } from './pages/main-account/main-account.component';
import { HouseKeepingAccountComponent } from './pages/house-keeping-account/house-keeping-account.component';
import { FarmAccountComponent } from './pages/farm-account/farm-account.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { SettingComponent } from './pages/setting/setting.component';


const routes: Routes = [
  {
    path:'',
    component:MainmenuComponent
  },{
    path:'main-account',
    component:MainAccountComponent
  },{
    path:'house-keeping-account',
    component:HouseKeepingAccountComponent
  },{
    path:'farm-account',
    component:FarmAccountComponent
  },{
    path:'user-management',
    component:UserManagementComponent
  },{
    path:'setting',
    component:SettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
