import { Component } from '@angular/core';

@Component({
  selector: 'template-outlet-user',
  templateUrl : './template-outlet.component.html'
})
export class TemplateOutletUserComponent  {
  localvariable : string = "Local name";
  hostObj : {id:string,name:string,age:number} = {id:'01X',name:'Tom',age:40};
  myhostvariable: string = 'Caller var 02';
  constructor() { }

}
