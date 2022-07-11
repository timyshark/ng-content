import { Component, ContentChild, Directive, Input,TemplateRef } from '@angular/core';


// @Directive({
//   selector: 'button[appExampleZippyToggle]',
// })
// export class ZippyToggleDirective1 {
//   @HostBinding('attr.aria-expanded') ariaExpanded = this.zippy.expanded;
//   @HostBinding('attr.aria-controls') ariaControls = this.zippy.contentId;
//   @HostListener('click') toggleZippy() {
//     this.zippy.expanded = !this.zippy.expanded;
//   }
//   constructor(public zippy: ZippyComponent1) {}
// }

let nextId = 0;

@Directive({
  selector: '[simpleRecordEditor]'
})
export class SimpleRecordEditorDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

@Component({
  selector: 'simple-record-tiles',
  templateUrl: 'simple-record-tiles.component.html',
})
export class SimpleRecordTilesComponent {
  contentId = `SRT-${nextId++}`;
  @Input() expanded = true;
  @ContentChild(SimpleRecordEditorDirective) content!: SimpleRecordEditorDirective;

}


