import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class CommunicationService{//сервис для передачи списка элементов навигации, соответствуюего определенному
    //модулю приложения . При каждой активации нового маршрута, в загружаемом компоненте, в конструкторе
    //запускается функция отправки данных локального списка представления меню навигации  sendResource(<data>). Для его получения основной модуль,
    // в котором нужно отобразить этот список, подписывается на получения данного списка как подписчик, через метод класса Observable.subscribe()
    private communicateSubject = new Subject<any>();
    public communicateObservable = this.communicateSubject.asObservable();
    sendResource(resource){
        this.communicateSubject.next(resource);
    }
}
export class SideNavItem {
    public text : string;
    public href : string;
    public className? : string;
    public activeClass : string;
    public icon? : string;
    public children? : SideNavItem[];
    public fragment? : string;
    
    constructor(param){
        this.text = param.text;
        this.href = param.href || '';
        this.className = param.className || '';
        this.activeClass = param.activeClass || '';
        this.icon = param.icon || '';
        this.children = param.children;
        this.fragment = param.fragment;
    }
}