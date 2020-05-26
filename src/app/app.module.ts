import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BlogModule } from './modules/blog/blog.module';
import { AppMaterialModule } from './modules/app-material-module';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './modules/home/home.module';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { ListComponent } from './components/blog/list/list.component';
import { EditPostComponent } from './components/blog/edit-post/edit-post.component';
import { StoreModule } from '@ngrx/store';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ListComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    BlogModule,
    HomeModule,
    StoreModule.forRoot({}, {}),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
