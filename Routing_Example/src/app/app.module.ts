import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainmenuComponent } from './pages/mainmenu/mainmenu.component';
import { MainAccountComponent } from './pages/main-account/main-account.component';
import { HouseKeepingAccountComponent } from './pages/house-keeping-account/house-keeping-account.component';
import { FarmAccountComponent } from './pages/farm-account/farm-account.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { SettingComponent } from './pages/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MainmenuComponent,
    MainAccountComponent,
    HouseKeepingAccountComponent,
    FarmAccountComponent,
    UserManagementComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
