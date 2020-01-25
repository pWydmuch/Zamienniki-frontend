import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { KursyFormComponent } from './components/kursy-form/kursy-form.component';
import { ResultKursyComponent } from './components/result-kursy/result-kursy.component';
import { PodanieTableComponent } from './components/podanie-table/podanie-table.component';
import { PodanieDetailComponent } from './components/podanie-detail/podanie-detail.component';
import { KursDetailComponent } from './components/kurs-detail/kurs-detail.component';


const routes: Routes = [
  {
    path: 'opiniowanie',
    children: [
      {
        path: '',
        component: PodanieTableComponent
      },
      {
        path: ':id',
        component: PodanieDetailComponent
      },
    ]
  },
  {
    path: 'wyszukiwanie',
    children: [
      {
        path: '',
        component: KursyFormComponent
      },
      {
        path: 'wyniki',
        children: [
          {
            path: '',
            component: ResultKursyComponent
          },
          {
            path: ':id',
            component: KursDetailComponent
          }
        ]
      },
    ]
  },
  { path: '', redirectTo: 'wyszukiwanie', pathMatch: 'full' }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
