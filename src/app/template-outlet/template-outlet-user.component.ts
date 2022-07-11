import { Component } from '@angular/core';

@Component({
  selector: 'template-outlet-user',
  template: `
  <h1>OutLet User!</h1>
  <template-outlet [hostvariable]="hostObj">
  <!-- <template-outlet [hostvariable]="{id:'D10',name:localvariable,age:39}"> -->
    <p>list of items</p>
    <!-- myvar is on the left side of the context vars myvar: hostvariable explicit-->
     <ng-template mytemplate-selector let-hostvariable1="myvar" > 

    <!-- when use $implicit, it automatically assigns hostvariable1 to the $implicit:var -->
    <!-- <ng-template mytemplateselector let-hostvariable1 > -->
      {{hostvariable1 | json}}
    </ng-template>

    `
})
export class TemplateOutletUserComponent  {
  localvariable : string = "Host Data from TemplateOutletUser Component";
  hostObj : {id:string,name:string,age:number} = {id:'01X',name:'Tom',age:40};
  constructor() { }

}
