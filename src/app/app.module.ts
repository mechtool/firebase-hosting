import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//----------general---------------------------------------
import { GeneralModule} from './general/general.module';
//--------------------material--------------------------
import { MaterialModule} from './material/material.module';
import {FlexLayoutModule } from '@angular/flex-layout';
//------------------services------------------------------
import {CommunicationService} from './services/AppService';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        //-------------material----------------------------
        MaterialModule,
        FlexLayoutModule,
        //-------------------------------------------------
        GeneralModule,
        AppRoutingModule,

  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
