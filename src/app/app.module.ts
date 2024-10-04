import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ADMIN_API_BASE_URL } from "./api/admin-api.service.generated";
import { environment } from "../environments/environment";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./shared/interceptors/token.interceptor";
import { GlobalHttpInterceptorService } from "./shared/interceptors/error-handler.interceptor";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { AppRoutingModule } from "./app.routes";
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { SidebarComponent } from "./layouts/sidebar/sidebar.component";
import { SearchModalComponent } from "./partials/search-modal/search-modal.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, RouterOutlet } from "@angular/router";
const APP_CONTAINERS = [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SearchModalComponent
];
@NgModule({
    declarations: [AppComponent, ...APP_CONTAINERS],
    imports: [
        RouterOutlet,
        BrowserModule,
        RouterModule,
        AppRoutingModule, 
    ],
    providers: [
        {
            provide: ADMIN_API_BASE_URL,
            useValue: environment.API_URL
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: GlobalHttpInterceptorService,
            multi: true
        },
        { 
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        },
    ],
    exports: [],
    bootstrap: [AppComponent],
})
export class AppModule {}