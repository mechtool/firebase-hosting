import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-attention',
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.css']
})
export class AttentionComponent  {
    
    @Input() public backgroundColor : string;
     @Input() public starColor : string;
     @Input() public textMark = '&#9733;';
    @Input() public textColor = '';
 
  constructor() { }
  

}
