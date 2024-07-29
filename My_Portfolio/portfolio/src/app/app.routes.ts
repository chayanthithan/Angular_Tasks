import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AchievementComponent } from './achievement/achievement.component';

export const routes: Routes = [
    {path:' ',component:HomeComponent,title:'Home'},
    {path:'about',component:AboutComponent,title:'About'},
    {path:'project',component:ProjectsComponent,title:'Project'},
    {path:'contact',component:ContactComponent,title:'Contact'},
    {path:'achievement',component:AchievementComponent,title:'Achievement'},
];
