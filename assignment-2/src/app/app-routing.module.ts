import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginginComponent } from './pages/logingin/logingin.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { AuthGaurdService } from './services/auth-gaurd.service';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'login' , component:LoginginComponent},
  {path:'restaurants' ,canActivate:[AuthGaurdService] , component:RestaurantsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
