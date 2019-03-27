import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';

import { ApplicantService } from './applicant.service';

@NgModule({
  declarations: [AppComponent, ListComponent, CreateComponent, UpdateComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApplicantService],
  bootstrap: [AppComponent]
})
export class AppModule {}
