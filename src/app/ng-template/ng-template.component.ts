import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'demo-ng-template',
  template: `
  <!-- Define a template -->
  <ng-template #myTemplate >
    <ul>
      <li>List Item 1</li>
      <li>List Item 2</li>
    </ul>
  </ng-template>

  <!-- use the Template this is the placeholder of where the template should be rendered,
  you must use createEmbeddedView() to render it-->
  <div #placeHolderRef >Ding ding ding</div>
    `
  
})
export class NgTemplateComponent implements OnInit {
  // Define these selectors as local variables 
  @ViewChild('placeHolderRef', { read: ViewContainerRef, static: true }) myPlaceHolderRef!: ViewContainerRef; //get the <div> that containes the #placeHolderRef ->as variable myPlaceHolderRef
  @ViewChild('myTemplate', { read: TemplateRef, static: true }) myTemplateVar!: TemplateRef<any>; //get the <ng-template> named #myTemplate as myTEmplateVar

  ngOnInit() {
    // Renders the tmplate myTemplate, otherwise will display ding ding ding
    // usage, render on demand in the placeholder 'myTemplateRef' the template 'myTemplate', with if conditions
    // for performance performance key
    this.myPlaceHolderRef.createEmbeddedView(this.myTemplateVar); //<- this will render "List of items"(myTemplateVar) after "Ding Ding Ding"(myPlaceHolderRef)


  }
}
