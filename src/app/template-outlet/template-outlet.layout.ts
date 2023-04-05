import { Component, ContentChild, Directive, Input, OnInit, TemplateRef } from '@angular/core';


@Directive({ selector: '[mytemplate-selector]' })
export class MyTemplateDirective {
  //can be accessed from object.temlateRef
  // this directive captures the content of html section inside a tag that has <div mytemplate-selector></div>
  constructor(public templateRef: TemplateRef<unknown>) { }
}
let nextId = 0;
@Component({
  selector: 'template-outlet-layout',
  templateUrl: './template-outlet.layout.html'
})
export class TemplateOutletLayout {
  // declare local variable content as the template directive child object
  // TemplateReference can be accessed : content.templateRef
  // This component instantiated upon a call by hosting component that calls selector '<template-outlet></template-outlet>'
  expanded: boolean = true;
  @Input() layoutvar: { id: string, name: string, age: number } = { id: '01D', name: 'Tim', age: 10 };
  // @Input() hostvariable:string ='Layout var 01';
  var2: number = 10;
  id = '10'
  name = 'Nimo';
  age = 18;
  @ContentChild(MyTemplateDirective) content!: MyTemplateDirective;
  constructor() { }
}
