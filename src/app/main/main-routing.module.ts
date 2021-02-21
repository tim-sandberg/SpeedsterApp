import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ClockComponent } from '../clock/clock.component';
import { MaintenanceLogComponent } from '../maintenance-log/maintenance-log.component';
import { MainComponent } from './main-component';

const mainRoutes: Routes = [
  {
    path: "main",
    component: MainComponent,
    children: [
      {
        path: "clock",
        component: ClockComponent
      }, {
        path: "maintenance-log",
        component: MaintenanceLogComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(mainRoutes)],
  exports: [
    FormsModule,
    RouterModule
  ]
})
export class MainRoutingModule { }
