import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "../header/header-component";
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main-component";
import { ClockComponent } from "../clock/clock.component";
import { MaintenanceLogComponent } from "../maintenance-log/maintenance-log.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        MainComponent,
        ClockComponent,
        MaintenanceLogComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MainRoutingModule
    ],
    providers: [
        // todo: HTTPService
    ]
})
export class MainModule { }