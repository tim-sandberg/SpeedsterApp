import { Component, OnInit } from '@angular/core';
import { MaintenanceLog } from './MaintenanceLog';
import maintenanceLogData from "src/assets/data/maintenanceLogData.json";

@Component({
  selector: 'app-maintenance-log',
  templateUrl: './templates/maintenance-log.component.html'
})
export class MaintenanceLogComponent implements OnInit {
  MAINTENANCE_LOG_DATA: string = "maintenanceLogData";
  maintenanceLog: MaintenanceLog;
  maintenanceLogs: MaintenanceLog[];
  rowNumber: number = 0;

  constructor() {
    this.maintenanceLogs = new Array<MaintenanceLog>();

    this.setLocalStorage();

    this.getMaintenanceLogs();
  }

  ngOnInit(): void {
  }

  setLocalStorage(): void {
    if (localStorage.getItem(this.MAINTENANCE_LOG_DATA) === null) {
      this.saveToLocalStorage(JSON.stringify(maintenanceLogData));
    }
  }

  /**
   * load stored maintenance logs (historical log info)
   */
  private getMaintenanceLogs() {
    var maintenanceLogLocalStorage = JSON.parse(localStorage.getItem(this.MAINTENANCE_LOG_DATA));

    maintenanceLogLocalStorage.forEach(maintenanceLogDataItem => {
      this.maintenanceLog = new MaintenanceLog();

      this.maintenanceLog.id = maintenanceLogDataItem.id;
      this.maintenanceLog.cost = maintenanceLogDataItem.cost;
      this.maintenanceLog.entryDate = new Date(maintenanceLogDataItem.entryDate);
      this.maintenanceLog.item = maintenanceLogDataItem.item;
      this.maintenanceLog.place = maintenanceLogDataItem.place;

      this.maintenanceLogs.push(this.maintenanceLog);

      this.rowNumber = this.maintenanceLog.id;
    });

    // clear out the value because this object is used for data entry
    this.maintenanceLog = new MaintenanceLog();
  }

  saveNewMaintenanceLogItem(): void {
    //increment the row number
    this.rowNumber = this.rowNumber + 1;

    this.maintenanceLog.id = this.rowNumber;

    // updating the maintenanceLogData collection in the UI
    this.maintenanceLogs.push(this.maintenanceLog);

    // this is where we save to the browser local storage!
    var maintenanceLogItem = {
      id: this.maintenanceLog.id,
      item: this.maintenanceLog.item,
      cost: this.maintenanceLog.cost,
      entryDate: this.maintenanceLog.entryDate.toString(),
      place: this.maintenanceLog.place
    };

    // updating the maintenanceLogData collection to save in storage (DB)
    maintenanceLogData.push(maintenanceLogItem);

    this.saveToLocalStorage(JSON.stringify(maintenanceLogData));
  }

  saveToLocalStorage(maintenanceLogData: string): void {
    localStorage.setItem(this.MAINTENANCE_LOG_DATA, maintenanceLogData);
  }
}
