import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';

const routes: Routes = [
  { path: 'ejercicio1', component: Ejercicio1Component}
];


@NgModule({
  declarations: [], 
  imports:[RouterModule.forRoot(routes)], //CommonModule,
  exports: [RouterModule]
})

export class AppRoutingModule { }
