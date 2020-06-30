import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidebarModule} from 'ng-sidebar';
import {MatGridListModule} from '@angular/material/grid-list';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagedFilesComponent } from './managed-files/managed-files.component';
import { RunCommandsComponent } from './run-commands/run-commands.component';
import { RemoteManagementComponent } from './remote-management/remote-management.component';
import { CrontabEditorComponent } from './crontab-editor/crontab-editor.component';
import { JobsComponent } from './jobs/jobs.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ManagedFilesComponent,
    RunCommandsComponent,
    RemoteManagementComponent,
    CrontabEditorComponent,
    JobsComponent,
    SettingsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    SidebarModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
