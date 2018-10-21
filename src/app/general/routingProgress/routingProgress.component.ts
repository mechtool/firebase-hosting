import { Component, AfterViewInit } from '@angular/core';
import {Router, NavigationStart, NavigationCancel, NavigationEnd} from '@angular/router';
@Component({
    selector : 'routing-progress',
    templateUrl : './routingProgress.component.html',
})
export class RoutingProgressComponent implements AfterViewInit{
    
    public visible : boolean = true;
    
    constructor(private router : Router){}

    ngAfterViewInit(){
        this.router.events.subscribe((event) => {
            this.visible = (event instanceof NavigationStart) ? true : (event instanceof NavigationEnd || event instanceof NavigationCancel) ? false : this.visible;
        }
    )
    }
}