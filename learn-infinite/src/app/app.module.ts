import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { ProfileIconComponent } from './components/profile-icon/profile-icon.component';
import { LogoComponent } from './components/logo/logo.component';
import { NextBackArrowComponent } from './components/next-back-arrow/next-back-arrow.component';
import { CoursesContainerComponent } from './components/courses-container/courses-container.component';
import { AdSectionComponent } from './components/ad-section/ad-section.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InputComponent,
    ProfileIconComponent,
    LogoComponent,
    NextBackArrowComponent,
    CoursesContainerComponent,
    AdSectionComponent,
    HeaderComponent,
    DashboardComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
