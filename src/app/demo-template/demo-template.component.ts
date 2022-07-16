import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-demo-template',
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
export class DemoTemplateComponent implements OnInit {
  // Define these selectors as local variables 
  @ViewChild('placeHolderRef', { read: ViewContainerRef, static: true }) myPlaceHolderRef!: ViewContainerRef;
  @ViewChild('myTemplate', { read: TemplateRef, static: true }) myTemplate1!: TemplateRef<any>;

  ngOnInit() {
    // Renders the tmplate myTemplate, otherwise will display ding ding ding
    // usage, render on demand in the placeholder 'myTemplateRef' the template 'myTemplate', with if conditions
    // for performance performance key
    this.myPlaceHolderRef.createEmbeddedView(this.myTemplate1); //<- this will render "List of items" after "Ding Ding Ding"


  }
}
