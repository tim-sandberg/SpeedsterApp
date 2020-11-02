import { Component, OnInit } from '@angular/core';
import { MaintenanceLog } from './MaintenanceLog';

@Component({
  selector: 'app-maintenance-log',
  templateUrl: './templates/maintenance-log.component.html'
})
export class MaintenanceLogComponent implements OnInit {
  maintenanceLog: MaintenanceLog;
  maintenanceLogs: MaintenanceLog[];

  constructor() {
    this.maintenanceLog = new MaintenanceLog();
    
    this.maintenanceLog.item = "oil change";
    this.maintenanceLog.cost = 2.34;
    this.maintenanceLog.entryDate = new Date("10/20/2020");
    this.maintenanceLog.place = "Lake Forest";

    this.maintenanceLogs = new Array<MaintenanceLog>();
    this.maintenanceLogs.push(this.maintenanceLog);
  }

  ngOnInit(): void {
  }

  saveNewMaintenanceLogItem(): void {
    this.maintenanceLogs.push(this.maintenanceLog);
  }
}
