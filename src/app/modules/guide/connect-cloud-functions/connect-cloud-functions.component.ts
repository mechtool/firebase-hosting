import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {QuerySelectorDirective} from '../../../general/query-selector/query-selector.directive';
import {CommunicationService, ScrollRouterService, SideNavItem} from '../../../services/AppService';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-connect-cloud-functions',
  templateUrl: './connect-cloud-functions.component.html',
  styleUrls: ['./connect-cloud-functions.component.css']
})
export class ConnectCloudFunctionsComponent implements AfterViewInit, OnDestroy{
    
    @ViewChildren(QuerySelectorDirective, {read : ElementRef})private appAnchors : QueryList<ElementRef>;
    
    constructor(private communication : CommunicationService, private routerService : ScrollRouterService) { }
    private subscriptions : Subscription[] = [];
    public localMenu : SideNavItem[] =  [
        new SideNavItem({text : 'Соединени с доменом', href : '/guide/connect-functions', fragment : 'serve-dynamic-content'}),
        new SideNavItem({text : 'Настройка облачных функций', href : '/guide/connect-functions', fragment : 'set-up-cloud-functions'}),
        new SideNavItem({text : 'Создание HTTP функции', href : '/guide/connect-functions', fragment : 'create-cloud-functions'}),
        new SideNavItem({text : 'Перенаправление запроса', href : '/guide/connect-functions', fragment : 'direct-hosting-request'}),
        new SideNavItem({text : 'Запуск контента локально', href : '/guide/connect-functions', fragment : 'run-dynamic-content'}),
        new SideNavItem({text : 'Развертывание', href : '/guide/connect-functions', fragment : 'deploy-functions'}),
        new SideNavItem({text : 'Использование куки', href : '/guide/connect-functions', fragment : 'using-cookies'}),
        new SideNavItem({text : 'Управление поведением кэша', href : '/guide/connect-functions', fragment : 'manage-cache'}),
        new SideNavItem({text : 'Заголовок Cache-Control', href : '/guide/connect-functions', fragment : 'set-cache-control'}),
        new SideNavItem({text : 'Отдача кэшированного контента', href : '/guide/connect-functions', fragment : 'when-cached-go'}),

    ];
    ngAfterViewInit() {
        this.subscriptions.push(this.routerService.subscribeChangeRoute(this));
        this.communication.sendResource({type : 'resource', appHeader : 'Соединение с облачными функциями'})
    }
    
    ngOnDestroy(){
        this.subscriptions.forEach(sub => sub.unsubscribe())
    }

}
