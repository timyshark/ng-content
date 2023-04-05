import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgTemplateComponent } from './ng-template/ng-template.component';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




import { TemplateOutletUserComponent } from './template-outlet/template-outlet.component';

import { Test1DashboardComponent } from './zippy-examples/test1-dashboard/test1-dashboard.component';
import { NgContentDashboardComponent } from './zippy-dashboard/ng-content-dashboard.component';
import { ContentContainerComponent } from './content-cotainer/component/scontent-container.component';

const appRoutes: Routes = [
  {  path: '', component: NgContentDashboardComponent,},
  {  path: 'content-container', component: ContentContainerComponent, },
  {  path: 'ng-template',  component: NgTemplateComponent, },
  {  path: 'template-outlet',  component: TemplateOutletUserComponent, },
  {  path: 'test1',  component: Test1DashboardComponent, },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/