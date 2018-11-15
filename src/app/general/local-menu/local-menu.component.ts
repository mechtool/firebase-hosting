import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {SideNavItem} from '../../services/AppService';
import {openCloseLocalMenu} from '../animations/animations';

@Component({
  selector: 'app-local-menu',
  templateUrl: './local-menu.component.html',
  styleUrls: ['./local-menu.component.css'],
    animations : [openCloseLocalMenu],
})
export class LocalMenuComponent implements AfterViewInit{
    
    public iconName = 'remove';
    public localMenuDisabled = false;
    public animateIndex = 'close';
    
    @Input() public localMenu : SideNavItem[] = [];
    
    constructor(private changeDetector : ChangeDetectorRef) {}
    
    ngAfterViewInit(){
        this.localMenuDisabled = !this.localMenu.length;
        this.changeDetector.detectChanges();
    }
    
    onClickButton(){
        this.animateIndex = this.animateIndex == 'close' ? 'open' : 'close';
        this.iconName = this.animateIndex == 'close' ? 'remove': 'sort';
    }

}
