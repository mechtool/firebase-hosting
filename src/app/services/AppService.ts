import {Injectable, QueryList} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterEvent} from '@angular/router';
import {QuerySelectorDirective} from '../general/query-selector/query-selector.directive';

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
    public childrenVisible? : boolean;
    
    constructor(param){
        this.text = param.text;
        this.href = param.href || '';
        this.className = param.className || '';
        this.activeClass = param.activeClass || '';
        this.icon = param.icon || '';
        this.children = param.children;
        this.fragment = param.fragment || '';
        this.childrenVisible = param.childrenVisible || false;
    }
}
export class RowData{
    constructor(public data : any[]){
    }
}

@Injectable()
export class ScrollRouterService {
    constructor(private router : Router, private  activatedRoute: ActivatedRoute){}
    
    subscribeChangeRoute(that){
        return this.activatedRoute.fragment.subscribe((fr : string) => {
            if(fr) {
                that.appAnchors.forEach(elem =>{
                    if(fr === elem.nativeElement.id){elem.nativeElement.scrollIntoView({ behavior: 'smooth' , block : 'start'})}
                })
            }
        })
        
    }
}