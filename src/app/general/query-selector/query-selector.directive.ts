import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[query-selector]'
})
export class QuerySelectorDirective {

  constructor(private elementRef : ElementRef) { }

}
