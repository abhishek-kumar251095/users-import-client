import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { DisplayUsersComponent } from './display-users/display-users.component';
import { UploadUserDataComponent } from './upload-user-data/upload-user-data.component';

import { FileUploadModule } from 'ng2-file-upload';


import {UsersService} from 'src/app/services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayUsersComponent,
    UploadUserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
