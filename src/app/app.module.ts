import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';




import { AppRoutingModule } from './app-routing.module';
import { ZippyComponent, ZippyContentDirective, ZippyToggleDirective } from './example-zippy/example-zippy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimpleRecordManagerComponent } from './simple-record-manager/simple-record-manager.component';
import { Test1DashboardComponent } from './test1-dashboard/test1-dashboard.component';
import { ZippyBasicComponent } from './zippy-basic/zippy-basic.component';
import { ZippyDashboardComponent } from './zippy-dashboard/zippy-dashboard.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';
import { ZippyNgprojectasComponent } from './zippy-ngprojectas/zippy-ngprojectas.component';
import { SimpleRecordEditorDirective, SimpleRecordTilesComponent } from './simple-record-tiles/simple-record-tiles.component';
import { DemoTemplateComponent } from './demo-template/demo-template.component';
import { MyTemplateDirective, TemplateOutletComponent } from './template-outlet/template-outlet.component';
import { TemplateOutletUserComponent } from './template-outlet/template-outlet-user.component';




@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ZippyComponent,
    ZippyToggleDirective,
    ZippyContentDirective,

    ZippyBasicComponent,
    ZippyMultislotComponent,
    ZippyNgprojectasComponent,
    SimpleRecordManagerComponent,
    PageNotFoundComponent,
    ZippyDashboardComponent,
    Test1DashboardComponent,
    SimpleRecordTilesComponent,
    SimpleRecordEditorDirective,
    DemoTemplateComponent,
    TemplateOutletComponent,
    TemplateOutletUserComponent,
    MyTemplateDirective

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
