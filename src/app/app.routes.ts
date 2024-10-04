import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
const routes: Routes = [
	// {
	// 	path: 'auth',
	// 	loadChildren: () =>
	// 	  import('./pages/auth/auth.module').then((m) => m.AuthModule)
	// },
	{
		path: '',
		component: AppComponent,
		children: [
			{
				path: '', 
				loadChildren: () =>
					import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
			},
			{
				path: 'index',
				loadChildren: () =>
					import('./pages/index/index.module').then(
						(m) => m.IndexModule
					),
			},
			{ path: '', redirectTo: 'index', pathMatch: 'full' },
		]
	},
	{ path: '**', redirectTo: 'index' }
]
@NgModule({
    imports: [
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled', 
        anchorScrolling: 'enabled', 
        onSameUrlNavigation: 'reload'
      })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

