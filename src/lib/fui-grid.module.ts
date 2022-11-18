import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SInfinityTableComponent } from "./sinfinity-table/sinfinity-table.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FuiIconsModule } from "@solenopsys/uimatrix-icons";
import { FormsModule } from "@angular/forms";
import { UtilsModule } from "@solenopsys/uimatrix-utils";
import { AngularResizeEventModule } from "angular-resize-event";

@NgModule({
  declarations: [SInfinityTableComponent],
  imports: [CommonModule, InfiniteScrollModule, FuiIconsModule, FormsModule, UtilsModule, AngularResizeEventModule],
  exports: [
    SInfinityTableComponent
  ]
})
export class FuiGridModule {
}
