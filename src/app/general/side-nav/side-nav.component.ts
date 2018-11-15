import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SideNavItem} from '../../services/AppService';
import {menuItemTransition} from '../animations/animations';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'] ,
    animations : [menuItemTransition],
})
export class SideNavComponent {

    public animationState = 0;
    @Input() public menuItems : SideNavItem[] = [];
    @Output() public onClickAppMenu : EventEmitter<any> = new EventEmitter<any>();
 
 onClickItemsMenu(item){
     this.animationState += 1;
     this.onClickAppMenu.emit(item);
 }


}
