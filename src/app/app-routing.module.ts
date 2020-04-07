import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressFormComponent } from './address-form/address-form.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MainTableComponent } from './main-table/main-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: MainDashboardComponent,
    data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: 'home/about',
    component: AddressFormComponent,
    data: {
      breadcrumb: 'About'
    }
  },
  {
    path: 'home/preferences',
    component: AddressFormComponent,
    data: {
      breadcrumb: 'Preferences'
    }
  },
  {
    path: 'home/changepassword',
    component: AddressFormComponent,
    data: {
      breadcrumb: 'Changepassword'
    }
  },
  { path: 'table', component: MainTableComponent, data: { breadcrumb: 'Table' } },
  { path: 'dragdrop', component: DragDropComponent, data: { breadcrumb: 'Drag & drop' } },
  { path: 'addressform', component: AddressFormComponent, data: { breadcrumb: 'Address form' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
