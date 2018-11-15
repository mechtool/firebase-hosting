import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path : 'guide', loadChildren : './modules/guide/guide.module#GuideModule'} ,
    {path : '', pathMatch : 'full', redirectTo : 'guide'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
