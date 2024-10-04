import { NgModule } from "@angular/core";
import { IndexComponent } from "./index.component";
import { IndexRoutingModule } from "./index.routes";

@NgModule({
    declarations: [IndexComponent],
    imports: [
        IndexRoutingModule
    ]
})

export class IndexModule {}