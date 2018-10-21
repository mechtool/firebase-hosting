import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'theme-color',
  templateUrl: './theme-color.component.html',
  styleUrls: ['./theme-color.component.css']
})
export class ThemeColorComponent  {

    @Output() public changeTheme : EventEmitter<any> = new EventEmitter<any>();
    public visible = false;
    public themeItems = [
        {className : 'first-theme',  tip : 'Желтый', backgroundColor : '#ffd600', src : '../assets/icons/app-shell/baseline_done_black_18dp.png', active : false},
        {className : 'second-theme', tip : 'Голубой',backgroundColor : '#1976d2', src : '../assets/icons/app-shell/baseline_done_white_18dp.png', active : true},
        {className : 'third-theme', tip : 'Зеленый',backgroundColor : '#009688', src : '../assets/icons/app-shell/baseline_done_white_18dp.png', active : false},
        {className : 'forth-theme', tip : 'Синий', backgroundColor : '#3f51b5', src : '../assets/icons/app-shell/baseline_done_white_18dp.png', active : false},
    ];

    onClickItem(inx){
        this.themeItems.forEach(item => {
            item.active = false;
        }) ;
        let item = this.themeItems[inx];
        item.active = true;
        this.changeTheme.emit(item);
        this.visible = false;
    }

}
