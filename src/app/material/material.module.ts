import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule, MatToolbarModule, MatIconModule, MatTooltipModule,MatProgressBarModule, MatButtonModule} from '@angular/material';


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
  ],
    exports : [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressBarModule,
        MatButtonModule,
        MatIconModule,
    ],
  declarations: []
})
export class MaterialModule { }
