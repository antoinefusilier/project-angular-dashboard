import { Component, Input, OnChanges, ViewChildren,ContentChild, Directive, QueryList } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Directive({selector: 'child-directive'})
export class ChildDirective {
  @Input() products_updated: any;

}
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnChanges {
  @ContentChild(ChildDirective) contentChild!: ChildDirective;
  // Voir les directive Angular pour la mise à jour du content
// https://angular.io/api/core/Directive
// https://angular.io/api/core/ContentChild

  ngOnChanges() {
    console.log(`Child directive input`)
    // this.products_updated.subscribe((line:any)=>{
      // array_products.push(line);
    // })
  }
}
