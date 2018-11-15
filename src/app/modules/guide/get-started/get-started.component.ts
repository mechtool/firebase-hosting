import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {QuerySelectorDirective} from '../../../general/query-selector/query-selector.directive';
import {CommunicationService, ScrollRouterService, SideNavItem} from '../../../services/AppService';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements AfterViewInit, OnDestroy{
    
    private subscriptions : Subscription[] = [];
    
    @ViewChildren(QuerySelectorDirective, {read : ElementRef})private appAnchors : QueryList<ElementRef>;
    
    constructor(private communication : CommunicationService, private routerService : ScrollRouterService) { }
    
    
    public localMenu : SideNavItem[] =  [
        new SideNavItem({text : 'Использование Firebase', href : '/guide/get-started', fragment : 'using-fb'}),
        new SideNavItem({text : 'Установить CLI', href : '/guide/get-started', fragment : 'set-up'}),
        new SideNavItem({text : 'Получить доступ к проекту', href : '/guide/get-started', fragment : 'access-project'}),
        new SideNavItem({text : 'Инициализировать приложение', href : '/guide/get-started', fragment : 'initialize-site'}),
        new SideNavItem({text : 'Определить корневую папку', href : '/guide/get-started',  fragment : 'set-root'}),
        new SideNavItem({text : 'Развернуть приложение', href : '/guide/get-started',  fragment : 'deploy-app'}),
    ];
    ngAfterViewInit(){
        this.communication.sendResource({type : 'resource', appHeader : 'Начало работы'})  ;
        this.subscriptions.push(this.routerService.subscribeChangeRoute(this));
    }
    
    ngOnDestroy(){
        this.subscriptions.forEach(sub => sub.unsubscribe())
    }


}
