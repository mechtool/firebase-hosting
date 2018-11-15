import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {GetStartedComponent} from './get-started/get-started.component';
import {ShareResourcesComponent} from './share-resources/share-resources.component';
import {ConnectCustomDomainComponent} from './connect-custom-domain/connect-custom-domain.component';
import {ConnectCloudFunctionsComponent} from './connect-cloud-functions/connect-cloud-functions.component';
import {CustomizeHostingComponent} from './customize-hosting/customize-hosting.component';
import {ReservedUrlsComponent} from './reserved-urls/reserved-urls.component';

const routes: Routes = [
    {path : 'index', component : IndexComponent, data : {type : 'index'}},
    {path : 'get-started', component : GetStartedComponent, data : {type : 'get-started'}},
    {path : 'share-resources', component : ShareResourcesComponent, data : {type : 'share-resources'}},
    {path : 'connect-domain', component : ConnectCustomDomainComponent, data : {type : 'connect-domain'}},
    {path : 'connect-functions', component : ConnectCloudFunctionsComponent, data : {type : 'connect-functions'}},
    {path : 'customize-hosting', component : CustomizeHostingComponent, data : {type : 'customize-hosting'}},
    {path : 'reserved-urls', component : ReservedUrlsComponent, data : {type : 'reserved-urls'}},
    
    {path : '', pathMatch : 'full', redirectTo : 'index'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuideRoutingModule { }
