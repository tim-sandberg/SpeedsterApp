import { NgModule } from "@angular/core";
import { HeaderComponent } from "../header/header-component";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    exports: [
        HeaderComponent,
        HomeComponent
    ]
})
export class HomeModule { }