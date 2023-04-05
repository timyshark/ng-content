import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';




import { AppRoutingModule } from './app-routing.module';
import { ZippyComponent, ZippyContentDirective, ZippyToggleDirective } from './example-zippy/example-zippy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { Test1DashboardComponent } from './zippy-examples/test1-dashboard/test1-dashboard.component';

import { NgContentDashboardComponent } from './zippy-dashboard/ng-content-dashboard.component';
import { ZippyMultislotComponent } from './zippy-examples/zippy-multislot/zippy-multislot.component';
import { ZippyNgprojectasComponent } from './zippy-examples/zippy-ngprojectas/zippy-ngprojectas.component';
import { ContentContainerDirective, ContentContainerLayout,   } from './content-cotainer/Layout/content-container-layout/content-container.layout';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { MyTemplateDirective,  TemplateOutletLayout } from './template-outlet/template-outlet.layout';
import { TemplateOutletUserComponent } from './template-outlet/template-outlet.component';
import { ContentContainerComponent } from './content-cotainer/component/scontent-container.component';
import { ZippyBasicComponent } from './zippy-examples/zippy-basic/zippy-basic.component';




@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ZippyComponent,
    ZippyToggleDirective,
    ZippyContentDirective,

    ZippyMultislotComponent,
    ZippyNgprojectasComponent,
    ContentContainerComponent,
    PageNotFoundComponent,
    NgContentDashboardComponent,
    ZippyBasicComponent,
    Test1DashboardComponent,
    ContentContainerLayout,
    ContentContainerDirective,
    NgTemplateComponent,
    TemplateOutletLayout,
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
