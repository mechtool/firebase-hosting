import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {QuerySelectorDirective} from '../../../general/query-selector/query-selector.directive';
import {CommunicationService, ScrollRouterService, SideNavItem} from '../../../services/AppService';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-reserved-urls',
  templateUrl: './reserved-urls.component.html',
  styleUrls: ['./reserved-urls.component.css']
})
export class ReservedUrlsComponent implements AfterViewInit, OnDestroy{
    
    @ViewChildren(QuerySelectorDirective, {read : ElementRef})private appAnchors : QueryList<ElementRef>;
    
    constructor(private communication : CommunicationService, private routerService : ScrollRouterService) { }
    private subscriptions : Subscription[] = [];
    public localMenu : SideNavItem[] =  [
        new SideNavItem({text : 'Настройка поведения', href : '/guide/customize-hosting', fragment : 'setting-behavior'}),
        new SideNavItem({text : 'Станица 404.html', href : '/guide/customize-hosting', fragment : '404-page'}),
        new SideNavItem({text : 'Правила перенапрвления', href : '/guide/customize-hosting', fragment : 'redirect-rules'}),
        new SideNavItem({text : 'Правила перезаписи', href : '/guide/customize-hosting', fragment : 'rewrite-rules'}),
        new SideNavItem({text : 'Заголовки', href : '/guide/customize-hosting', fragment : 'headers'}),
        new SideNavItem({text : 'Правила приоритета', href : '/guide/customize-hosting', fragment : 'priorities'}),
    
    ];
    ngAfterViewInit() {
        this.subscriptions.push(this.routerService.subscribeChangeRoute(this));
        this.communication.sendResource({type : 'resource', appHeader : 'Зарезервированные адреса'})
    }
    
    ngOnDestroy(){
        this.subscriptions.forEach(sub => sub.unsubscribe())
    }

}
