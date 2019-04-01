import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ApplicantService } from './applicant.service';
import { ConfirmDlgComponent } from './confirm-dlg/confirm-dlg.component';
import { ConfirmDlgService } from './confirm-dlg/confirm-dlg.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    ConfirmDlgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [ApplicantService, ConfirmDlgService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDlgComponent]
})
export class AppModule {}
