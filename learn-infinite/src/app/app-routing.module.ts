import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './gaurds/auth-gaurd.service';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExploreCoursesComponent } from './pages/explore-courses/explore-courses.component';
import { HomeComponent } from './pages/home/home.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { NotesComponent } from './pages/notes/notes.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'explore-course',component:ExploreCoursesComponent},
    {path:'my-courses',component:MyCoursesComponent},
    // {path:'explore-course',canActivate:[AuthGaurdService] ,component:ExploreCoursesComponent},
    // {path:'my-courses',canActivate:[AuthGaurdService] ,component:MyCoursesComponent},
    {path:'notes',component:NotesComponent},
    {path:'settings',component:SettingsComponent}
  ]},
  {path:'login',component:AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
