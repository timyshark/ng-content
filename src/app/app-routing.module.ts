import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoTemplateComponent } from './demo-template/demo-template.component';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



import { SimpleRecordManagerComponent } from './simple-record-manager/simple-record-manager.component';
import { TemplateOutletUserComponent } from './template-outlet/template-outlet-user.component';

import { Test1DashboardComponent } from './test1-dashboard/test1-dashboard.component';
import { ZippyDashboardComponent } from './zippy-dashboard/zippy-dashboard.component';

const appRoutes: Routes = [
  {  path: '', component: ZippyDashboardComponent,},
  {  path: 'manager', component: SimpleRecordManagerComponent, },
  {  path: 'template',  component: DemoTemplateComponent, },
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