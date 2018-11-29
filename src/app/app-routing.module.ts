import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';

const routes: Routes = [
  {path: 'display-data', component: DisplayDataComponent},
  { path: '',
    redirectTo: '/display-data',
    pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
