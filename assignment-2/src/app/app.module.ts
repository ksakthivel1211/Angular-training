import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { LoginginComponent } from './pages/logingin/logingin.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { FormsModule } from '@angular/forms';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { LoginService } from './services/login.service';
import { CardComponent } from './components/card/card.component';
import { PrefixSufixPipe } from './pipes/prefix-sufix.pipe';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginginComponent,
    RestaurantsComponent,
    CardComponent,
    PrefixSufixPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGaurdService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
