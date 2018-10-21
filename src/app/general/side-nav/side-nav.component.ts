import {Component, Input, OnInit} from '@angular/core';
import {SideNavItem} from '../../services/AppService';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

    @Input() public menuItems : SideNavItem[] = [];
    constructor() { }
    
    ngOnInit() {
    }

}
