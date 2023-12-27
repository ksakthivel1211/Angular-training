import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ProfileIconComponent } from './components/profile-icon/profile-icon.component';
import { LogoComponent } from './components/logo/logo.component';
import { NextBackArrowComponent } from './components/next-back-arrow/next-back-arrow.component';
import { CoursesContainerComponent } from './components/courses-container/courses-container.component';
import { AdSectionComponent } from './components/ad-section/ad-section.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LeftMenuContainerComponent } from './components/left-menu-container/left-menu-container.component';
import { ButtonComponent } from './components/button/button.component';
import { CourseSelectionComponent } from './components/course-selection/course-selection.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExploreCoursesComponent } from './pages/explore-courses/explore-courses.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { PrefixSufixPipe } from './pipes/prefix-sufix.pipe';
import { NotesComponent } from './pages/notes/notes.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TitleCasePipe } from '@angular/common';
import { SentenceCasePipe } from './pipes/sentence-case.pipe';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { LoginRegistrationComponent } from './pages/login-registration/login-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProfileIconComponent,
    LogoComponent,
    NextBackArrowComponent,
    CoursesContainerComponent,
    AdSectionComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    LeftMenuContainerComponent,
    ButtonComponent,
    CourseSelectionComponent,
    ExploreCoursesComponent,
    MyCoursesComponent,
    PrefixSufixPipe,
    NotesComponent,
    SettingsComponent,
    SentenceCasePipe,
    SearchBoxComponent,
    SignUpFormComponent,
    FormInputComponent,
    LoginRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
