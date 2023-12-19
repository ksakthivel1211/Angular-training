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
import { HomeComponent } from './pages/home/home.component';
import { LeftMenuContainerComponent } from './components/left-menu-container/left-menu-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { CourseSelectionComponent } from './components/course-selection/course-selection.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    AuthenticationComponent,
    HomeComponent,
    LeftMenuContainerComponent,
    FooterComponent,
    ButtonComponent,
    CourseSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
