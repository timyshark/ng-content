import { Component } from '@angular/core';

@Component({
  selector: 'template-outlet-user',
  template: `
  <h1>OutLet User!</h1>
  <!-- <template-outlet [layoutvar]="myhostvariable"> -->
  <!-- if the template has direct object assigned, then this assignment is useless -->
  <template-outlet [layoutvar]="{id:'D10',name:localvariable,age:39}">
    <p>list of items</p>
    <!-- EXPLICIT OPTION: myvar is on the left side of the context vars myvar: hostvariable explicit-->
     <!-- <ng-template mytemplate-selector let-localvar="myvar" >  -->


    <!-- when use $implicit, it automatically assigns hostvariable1 to the $implicit:var -->
    <!-- let-localvar matches localvar with layoutvar -->
    <ng-template mytemplate-selector let-localvar >
      {{localvar | json}}
    </ng-template>

    `
})
export class TemplateOutletUserComponent  {
  localvariable : string = "Local name";
  hostObj : {id:string,name:string,age:number} = {id:'01X',name:'Tom',age:40};
  myhostvariable: string = 'Caller var 02';
  constructor() { }

}
