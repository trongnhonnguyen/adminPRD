import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import KTComponents from '../metronic/core/index';
import KTLayout from '../metronic/app/layouts/demo1';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit, OnInit {
	title = 'metronic-tailwind-angular';
	@HostBinding('class') hostClass = 'flex grow';
	constructor(){}
	ngAfterViewInit(): void {
		KTComponents.init();
		KTLayout.init();
	}
	ngOnInit(): void {}
}

