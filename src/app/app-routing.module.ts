import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeHeaderComponent } from './home/home-header-component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './utils/errors/page-not-found-component';

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

  // page not found must reside here at the root.  all other routers will 
  // fall to this, if their route is not found
  , { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      enableTracing: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
