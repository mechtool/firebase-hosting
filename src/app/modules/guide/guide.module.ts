import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuideRoutingModule } from './guide-routing.module';

//---------components------------------------------------
import { IndexComponent } from './index/index.component';
//-------------services-------------------------------------
import { ScrollRouterService} from '../../services/AppService';
//------------------material---------------------------------
import { MaterialModule } from '../../material/material.module';
import {GeneralModule} from '../../general/general.module';
import { GetStartedComponent } from './get-started/get-started.component';
import { ShareResourcesComponent } from './share-resources/share-resources.component';
import { ConnectCustomDomainComponent } from './connect-custom-domain/connect-custom-domain.component';
import { ConnectCloudFunctionsComponent } from './connect-cloud-functions/connect-cloud-functions.component';
import { CustomizeHostingComponent } from './customize-hosting/customize-hosting.component';
import { ReservedUrlsComponent } from './reserved-urls/reserved-urls.component';

@NgModule({
  imports: [
    CommonModule,
      MaterialModule,
      GeneralModule,
      GuideRoutingModule,

  ],
  declarations: [IndexComponent, GetStartedComponent, ShareResourcesComponent, ConnectCustomDomainComponent, ConnectCloudFunctionsComponent, CustomizeHostingComponent, ReservedUrlsComponent] ,
    providers : [ScrollRouterService]
})
export class GuideModule { }
