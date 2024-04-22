import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { MainmenuComponent } from './pages/mainmenu/mainmenu.component';
import { MainaccountComponent } from './pages/mainaccount/mainaccount.component';
import { HousekeepingaccountComponent } from './pages/housekeepingaccount/housekeepingaccount.component';
import { FarmaccountComponent } from './pages/farmaccount/farmaccount.component';
import { MillaccountComponent } from './pages/millaccount/millaccount.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    FooterComponent,
    MainmenuComponent,
    MainaccountComponent,
    HousekeepingaccountComponent,
    FarmaccountComponent,
    MillaccountComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
