import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      data: {
        title: 'Dashboard',
        requiredPolicy: 'Permissions.Dashboard.View',
      },
      //canActivate: [AuthGuard],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}