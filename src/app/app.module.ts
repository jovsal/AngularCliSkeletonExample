import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { UserService } from './services/user.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './routed-components/home/home.component';
import { SpinerComponent } from './components/views/spiner/spiner.component';
import { UserCardComponent } from './components/views/user-card/user-card.component';


const appRoutes: Routes = [
	{ path: '', redirectTo:'home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent}
	];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpinerComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
