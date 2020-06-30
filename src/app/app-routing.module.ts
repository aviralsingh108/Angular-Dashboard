import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagedFilesComponent } from './managed-files/managed-files.component';
import { RunCommandsComponent } from './run-commands/run-commands.component';
import { RemoteManagementComponent } from './remote-management/remote-management.component';
import { CrontabEditorComponent } from './crontab-editor/crontab-editor.component';
import { JobsComponent } from './jobs/jobs.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'dashboard', component:DashboardComponent},
  { path:'managedfiles', component: ManagedFilesComponent},
  { path:'runcommands', component: RunCommandsComponent},
  { path:'remotemanagement', component: RemoteManagementComponent},
  { path:'crontabeditor', component: CrontabEditorComponent},
  { path:'jobs', component: JobsComponent},
  { path:'settings', component: SettingsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
