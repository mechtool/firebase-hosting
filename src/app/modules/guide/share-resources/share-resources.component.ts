import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {QuerySelectorDirective} from '../../../general/query-selector/query-selector.directive';
import {CommunicationService, RowData, ScrollRouterService, SideNavItem} from '../../../services/AppService';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-share-resources',
  templateUrl: './share-resources.component.html',
  styleUrls: ['./share-resources.component.css']
})
export class ShareResourcesComponent implements AfterViewInit, OnDestroy{
    
    @ViewChildren(QuerySelectorDirective, {read : ElementRef})private appAnchors : QueryList<ElementRef>;
    
    constructor(private communication : CommunicationService, private routerService : ScrollRouterService) { }
    private subscriptions : Subscription[] = [];
    public localMenu : SideNavItem[] =  [
        new SideNavItem({text : 'Совместное использование', href : '/guide/share-resources', fragment : 'start'}),
        new SideNavItem({text : 'Обновить оболочку CLI', href : '/guide/share-resources', fragment : 'update-cli'}),
        new SideNavItem({text : 'Добавить приложение', href : '/guide/share-resources', fragment : 'add-app'}),
        new SideNavItem({text : 'Настройка целей развертывания', href : '/guide/share-resources', fragment : 'set-up-target'}),
        new SideNavItem({text : 'Определение конфигурации', href : '/guide/share-resources', fragment : 'define-conf'}),
        new SideNavItem({text : 'Развертывание сайта', href : '/guide/share-resources', fragment : 'deploy-sites'}),
    ];
    
    public tableData0 = [
        new RowData(['firebase deploy', 'Производит развертывание всех ресурсов развертывания в директории проекта.']),
        new RowData(['firebase deploy --only hosting:<span class="dark-red">target-name</span>', 'Развертывает релиз ресурсов для указанного имени цели']) ,
        new RowData(['firebase serve', 'Запускает приложение локально для отладки']),
        new RowData(['firebase serve --only hosting:<span class="dark-red">target-name</span>', 'Запускает локально для отладки приложение, определенное по целевому имени.'])
    ];
    
    ngAfterViewInit() {
        this.subscriptions.push(this.routerService.subscribeChangeRoute(this));
        this.communication.sendResource({type : 'resource', appHeader : 'Совместное использование ресурсов'})
    }
    
    ngOnDestroy(){
        this.subscriptions.forEach(sub => sub.unsubscribe())
    }
    
}
