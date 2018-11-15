import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule,} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatTooltipModule,
      MatProgressBarModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
  ],
    exports : [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressBarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule
    ],
  declarations: []
})
export class MaterialModule { }
