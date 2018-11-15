import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {CommunicationService, SideNavItem} from './services/AppService';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {routerTransition} from './general/animations/animations';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls : ['./app.component.css', './app.component.css'],
    animations : [routerTransition],
    changeDetection : ChangeDetectionStrategy.OnPush  // явная стратегия фиксации изменений
})
export class AppComponent {
    
    public appHeader = 'FireBase Hosting.ru';
    public appTheme = {theme: 'second-theme', logoSrc: '../assets/icons/app-shell/firebase_logo.png'};
    public openedSideNav = true;
    
    public toolbarButtons = [
        {className : 'menuButton', icon : 'menu', tip : 'Меню', tipClassName : 'buttonTip'}
    ] ;
    
    public appMenu : SideNavItem[] =  [

                new SideNavItem({text : 'Введение', href :'/guide/index', className : 'first', activeClass : 'activeRoute'}),
                new SideNavItem({text : "Начало работы", href :  '/guide/get-started', activeClass : 'activeRoute',  className : 'first'}),
                new SideNavItem({text : "Разделение ресурсов", href :  '/guide/share-resources', activeClass : 'activeRoute',  className : 'first'}),
                new SideNavItem({text : "Работа со сторонним доменом", href :  '/guide/connect-domain', activeClass : 'activeRoute',  className : 'first'}),
                new SideNavItem({text : "Соединение с облачными функциями", href :  '/guide/connect-functions', activeClass : 'activeRoute',  className : 'first'}),
                new SideNavItem({text : "Настройка поведения хостинга", href :  '/guide/customize-hosting', activeClass : 'activeRoute',  className : 'first'}),
                new SideNavItem({text : "Зарезервированные адреса", href :  '/guide/reserved-urls', activeClass : 'activeRoute',  className : 'first'}),
            ]
    
    public logoSource = {'first-theme' : '../assets/icons/app-shell/firebase_logo.png', 'second-theme' : '..//assets/icons/app-shell/firebase_logo.png', 'third-theme' : '../assets/icons/app-shell/firebase_logo.png', 'forth-theme': '..//assets/icons/app-shell/firebase_logo.png'};
    
    private icons = [ //иконки для регистрации в реестре material
        {name : 'logo-pwa', link : 'assets/icons/app-shell/pwa-blue.svg'},
        {name : 'sort', link : 'assets/icons/app-shell/sort-24px.svg'},
        {name : 'menu', link : 'assets/icons/app-shell/menu-24px.svg'},
        {name : 'remove', link : 'assets/icons/app-shell/remove-24px.svg'},
        {name : 'layers', link : 'assets/icons/app-shell/layers-24px.svg'},
        {name : 'filter', link : 'assets/icons/app-shell/filter_none-24px.svg'},
        {name : 'format-color', link : 'assets/icons/app-shell/format_color_fill-24px.svg'},
        {name : 'list', link : 'assets/icons/app-shell/list-24px.svg'},
        {name : 'attention', link : 'assets/icons/attention/error_outline-24px.svg'},
        {name : 'openLocal', link : 'assets/icons/app-shell/baseline-add_circle_outline-24px.svg'},
        {name : 'closeLocal', link : 'assets/icons/app-shell/baseline-remove_circle_outline-24px.svg'},
    ] ;
    
    constructor(private overlayContainer: OverlayContainer,
                private communication : CommunicationService,
                private iconRegistry : MatIconRegistry,
                private sanitizer : DomSanitizer,
                private changeDetector : ChangeDetectorRef) {
        //регистрация иконок в реестре иконок material
        this.icons.forEach(item => {
            this.iconRegistry.addSvgIcon(item.name, this.sanitizer.bypassSecurityTrustResourceUrl(item.link));
        }) ;
        //подписка на взаимодействие между компонентами
        this.communication.communicateObservable.subscribe(resource => {
            if(resource.type == 'resource'){
                this.appHeader = resource.appHeader;
            }
            this.changeDetector.detectChanges();
        })
    }
    
    getState(outlet) {
        return outlet.activatedRouteData['type'];
    }
    
    onChangeThemeColor(theme){
        this.appTheme = {theme : theme.className, logoSrc : this.logoSource[theme.className]} ;
        this.overlayContainer.getContainerElement().classList.add(theme.className);
    }
    onClickButtons($event){
        let target = $event.target;
        if(this.getTarget(target, 'menuButton')){ //нажата кнопка отображения меню
            this.openedSideNav = !this.openedSideNav;
        }
    }
    
    public onClickAppMenu(item){
        item.childrenVisible = !item.childrenVisible;
        item.icon && (item.icon = item.childrenVisible ? 'sort' : 'remove');
        item.children && (item.children.forEach(ch => {
            closeChildren(ch);
        })) ;
        this.changeDetector.detectChanges();
        
        function closeChildren(item) {
            item.children && (item.children.forEach(ch => {
                closeChildren(ch);
            })) ;
            if(item.childrenVisible){
                item.childrenVisible = false ;
                item.icon = 'remove';
            }
        }
    }
    
    private getTarget(base, selector){
        if(base.classList.contains(selector)) return base;
        else if(base.classList.contains('buttonBlock')) return null;
        else return this.getTarget(base.parentElement, selector);
    }
}

