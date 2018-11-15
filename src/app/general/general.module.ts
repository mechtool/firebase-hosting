import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import {RoutingProgressComponent} from './routingProgress/routingProgress.component';
import {MatButtonModule, MatIconModule, MatProgressBarModule, MatTooltipModule} from '@angular/material';
import {ThemeColorComponent} from './theme-color/theme-color.component';
import { QuerySelectorDirective } from './query-selector/query-selector.directive';
import { LocalMenuComponent } from './local-menu/local-menu.component';
import { InformationTableComponent } from './information-table/information-table.component';
import { AttentionComponent } from './attention/attention.component';
import { CodeExampleComponent } from './code-example/code-example.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatProgressBarModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
    ],
    declarations: [SideNavComponent, RoutingProgressComponent, ThemeColorComponent, QuerySelectorDirective, LocalMenuComponent, InformationTableComponent, AttentionComponent, CodeExampleComponent],
    exports : [SideNavComponent, RoutingProgressComponent, ThemeColorComponent, QuerySelectorDirective, LocalMenuComponent, InformationTableComponent,AttentionComponent, CodeExampleComponent]
})
export class GeneralModule { }
