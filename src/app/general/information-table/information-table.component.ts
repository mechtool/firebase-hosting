import {Component, Input, OnInit} from '@angular/core';
import {RowData} from '../../services/AppService';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-information-table',
  templateUrl: './information-table.component.html',
  styleUrls: ['./information-table.component.css']
})
export class InformationTableComponent implements OnInit {

    @Input() public tableData : RowData[] ;
    @Input() public firstCol : string;
    
  constructor(public sanitizer : DomSanitizer) { }

  ngOnInit() {
  }

}
