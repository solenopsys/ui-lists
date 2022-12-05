import { NgModule } from "@angular/core";
import { SInfinityTableComponent } from "./sinfinity-table/sinfinity-table.component";

import { FuiIconsModule } from "@solenopsys/uimatrix-icons";
import { FormsModule } from "@angular/forms";
import { UtilsModule } from "@solenopsys/uimatrix-utils";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AngularResizeEventModule } from "angular-resize-event";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, InfiniteScrollModule, FuiIconsModule, FormsModule, UtilsModule, AngularResizeEventModule],

  declarations: [SInfinityTableComponent],
  exports: [
    SInfinityTableComponent
  ]
})
export class FuiGridModule {
}
