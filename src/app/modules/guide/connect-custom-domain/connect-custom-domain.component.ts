import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {QuerySelectorDirective} from '../../../general/query-selector/query-selector.directive';
import {CommunicationService, ScrollRouterService, SideNavItem} from '../../../services/AppService';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-connect-custom-domain',
  templateUrl: './connect-custom-domain.component.html',
  styleUrls: ['./connect-custom-domain.component.css']
})
export class ConnectCustomDomainComponent implements AfterViewInit, OnDestroy{
    
    @ViewChildren(QuerySelectorDirective, {read : ElementRef})private appAnchors : QueryList<ElementRef>;
    
    constructor(private communication : CommunicationService, private routerService : ScrollRouterService) { }
    private subscriptions : Subscription[] = [];
    public localMenu : SideNavItem[] =  [
        new SideNavItem({text : 'Соединени с доменом', href : '/guide/connect-domain', fragment : 'domain-connect'}),
        new SideNavItem({text : 'Настройка связи', href : '/guide/connect-domain', fragment : 'domain-set-up'}),
        new SideNavItem({text : 'Ожидание сертификата', href : '/guide/connect-domain', fragment : 'wait-ssl'}),
    ];
    ngAfterViewInit() {
        this.subscriptions.push(this.routerService.subscribeChangeRoute(this));
        this.communication.sendResource({type : 'resource', appHeader : 'Соединение со сторонним доменом'})
    }
    
    ngOnDestroy(){
        this.subscriptions.forEach(sub => sub.unsubscribe())
    }
}
