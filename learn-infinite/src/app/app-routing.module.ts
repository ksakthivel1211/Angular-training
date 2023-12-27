import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './gaurds/auth-gaurd.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExploreCoursesComponent } from './pages/explore-courses/explore-courses.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginRegistrationComponent } from './pages/login-registration/login-registration.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { NotesComponent } from './pages/notes/notes.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'explore-course',canActivate:[AuthGaurdService] ,component:ExploreCoursesComponent},
    {path:'my-courses',canActivate:[AuthGaurdService] ,component:MyCoursesComponent},
    {path:'notes',component:NotesComponent},
    {path:'settings',component:SettingsComponent}
  ]},
  {path:'login',component:LoginRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
