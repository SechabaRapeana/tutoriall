import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { InstallComponent } from './install/install.component';
import { StartComponent } from './start/start.component';
import { RunComponent } from './run/run.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent,InstallComponent,StartComponent,RunComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component:  HomeComponent},
      {path: 'install', component:  InstallComponent},
      {path: 'start', component:  StartComponent},
      {path: 'run', component:  RunComponent},
     
    ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
