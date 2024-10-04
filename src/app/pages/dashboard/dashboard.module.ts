import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard.routes";

@NgModule({
    imports: [
        DashboardRoutingModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule {}