import { Component, ContentChild, Directive, Input,TemplateRef } from '@angular/core';


let nextId = 0;

@Directive({
  selector: '[contentContainer]'
})
export class ContentContainerDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

@Component({
  selector: 'content-container-layout',
  templateUrl: 'content-container.layout.html',
})
export class ContentContainerLayout {
  contentId = `SRT-${nextId++}`;
  @Input() expanded = true;
  @ContentChild(ContentContainerDirective) content!: ContentContainerDirective;

}


