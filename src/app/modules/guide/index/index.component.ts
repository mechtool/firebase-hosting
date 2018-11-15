import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CommunicationService, RowData, ScrollRouterService, SideNavItem} from '../../../services/AppService';
import {QuerySelectorDirective} from '../../../general/query-selector/query-selector.directive';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'] ,
})
export class IndexComponent implements AfterViewInit, OnDestroy{

    @ViewChildren(QuerySelectorDirective, {read : ElementRef})private appAnchors : QueryList<ElementRef>;
    
    constructor(private communication : CommunicationService, private routerService : ScrollRouterService) { }
    private subscriptions : Subscription[] = [];
    public localMenu : SideNavItem[] =  [
        new SideNavItem({text : 'Firebase Hosting', href : '/guide/index', fragment : 'description'}),
        new SideNavItem({text : 'Как это работает', href : '/guide/index', fragment : 'howItWorks'}),
        new SideNavItem({text : 'Алгоритм реализации', href : '/guide/index', fragment : 'execution'}),
    ];
    public tableData0 = [
        new RowData(['Работа по безопасному протоколу', 'Современная сеть - безопасная сеть. Базовая конфигурация <span class="dark-blue">SSL</span> уже настроена на хостинге Firebase и всегда раздает контент по безопасному каналу.']),
        new RowData(['Быстрая доставка контента', 'Каждый выгружаемый разработчиком файл кэшируется по <span class="dark-blue">SSD</span> в собственную сеть доставки контента, распределенной по всему миру. Не важно, где находяться пользователи вашего приложения, контент найдет их очень быстро.']) ,
        new RowData(['Быстая разработка', 'Используя <span class="dark-red" >Angular CLI</span> за секунды получаете рабочую структуру приложения, легко добавляя необходимые сущности в рабочий процесс.']),
        new RowData(['Откат в один клик', 'Быстрая разработка - это здорово. Но иметь возможность исправлять ошибки - еще лучше. <span class="dark-blue">Firebase Hosting</span> предоставляет возможность полного версионирования и управления релизами приложения с помощью откатов приложения в один клик. '])
    ];
    
    public tableData1 = [
        new RowData(['<div class="stepPoint">1</div> Установить <span class="dark-red">Firebase CLI</span>', '<a target="_blank" href="">Firebase CLI</a> - облегчает создание и активацию нового проекта, запускает локальный сервер отладки, и развертывает приложение']),
        new RowData(['<div class="stepPoint">2</div> Настроить папку проекта', 'Добавте статические ресурсы в корневую папку проекта и настройте <span class="dark-red">Cloud Functions</span> для раздачи динамического контента. Затем можно протестировать сайт локально запустив команду <span class="dark-red">firebase serve</span>.']) ,
        new RowData(['<div class="stepPoint">3</div> Развернитесь проектом', 'Когда приложение выглядит замечательно запустите команду <span class="dark-red" >firebase deploy</span> для выгрузки последнего снимка приложения на сервер. Новая версия развернется сразу, что не заставит беспокоиться о проблемах, или при фрагментированном развертывание. А если, что-то пошло не так, можно откатиться на предыдущую версию в один клик.']),
    ];
    
    
    ngAfterViewInit() {
       this.subscriptions.push(this.routerService.subscribeChangeRoute(this));
        this.communication.sendResource({type : 'resource', appHeader : 'Firebase Hosting.ru  Введение'})
    }
    
    ngOnDestroy(){
        this.subscriptions.forEach(sub => sub.unsubscribe())
    }
    
}
