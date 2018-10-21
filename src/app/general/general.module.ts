import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import {RoutingProgressComponent} from './routingProgress/routingProgress.component';
import {MatIconModule, MatProgressBarModule, MatTooltipModule} from '@angular/material';
import {ThemeColorComponent} from './theme-color/theme-color.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatProgressBarModule,
        MatIconModule,
        MatTooltipModule,
    ],
    declarations: [SideNavComponent, RoutingProgressComponent, ThemeColorComponent],
    exports : [SideNavComponent, RoutingProgressComponent, ThemeColorComponent]
})
export class GeneralModule { }
