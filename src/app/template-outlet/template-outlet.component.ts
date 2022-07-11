import { Component, ContentChild, Directive, Input, OnInit, TemplateRef } from '@angular/core';


@Directive({ selector: '[mytemplate-selector]'})
export class MyTemplateDirective {
  //can be accessed from object.temlateRef
  // this directive captures the content of html section inside a tag that has <div mytemplate-selector></div>
  constructor(public templateRef: TemplateRef<unknown>) { }
}
let nextId = 0;
@Component({
  selector: 'template-outlet',
  template: `
  <table border="1">
    <tr>
        <th> List </th> <th> Value</th>
    </tr>
    <tr>
        <td><ng-content></ng-content></td>
        <td>
            <div *ngIf="expanded" [id]="hostvariable">
                The Editor:
                <!-- Implicit, variable and label are the same hostvariable -->
                <!-- <ng-container [ngTemplateOutlet]="content.templateRef"
                    [ngTemplateOutletContext]="{$implicit: {hostvariable}}"></ng-container> -->

                    <!-- Explicit, variable uses label to the caller to use let-localvar="myvar" -->
                    <ng-container [ngTemplateOutlet]="content.templateRef"
                    [ngTemplateOutletContext]="{myvar: hostvariable}"></ng-container>
            </div>
        </td>
    </tr>
<table>
  `
})
export class TemplateOutletComponent  {
  // declare local variable content as the template directive child object
  // TemplateReference can be accessed : content.templateRef
  // This component instantiated upon a call by hosting component that calls selector '<template-outlet></template-outlet>'
  expanded: boolean = true;
  @Input() hostvariable:{id:string,name:string,age:number} = {id:'01D',name:'Tim',age:10};
  var2:number = 10;
  @ContentChild(MyTemplateDirective) content!: MyTemplateDirective;
  constructor() { }


}
