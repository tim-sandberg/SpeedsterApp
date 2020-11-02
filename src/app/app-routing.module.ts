import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { HomeComponent } from './home/home.component';
import { MaintenanceLogComponent } from './maintenance-log/maintenance-log.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
  , {
    path: "home",
    component: HomeComponent
  }
  , {
    path: "clock",
    component: ClockComponent
  }
  , {
    path: "maintenance-log",
    component: MaintenanceLogComponent
  }
];

@NgModule({
  declarations: [
    ClockComponent,
    MaintenanceLogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)],
  exports: [
    FormsModule,
    RouterModule
  ]
})
export class AppRoutingModule { }
