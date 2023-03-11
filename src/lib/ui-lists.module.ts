import {NgModule} from "@angular/core";
import {InfinityTableComponent} from "./infinity-table/infinity-table.component";

import {UIIconsModule} from "@solenopsys/ui-icons";
import {FormsModule} from "@angular/forms";
import {DeclaredService, UtilsModule} from "@solenopsys/ui-utils";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {AngularResizeEventModule} from "@le2xx/angular-resize-event";
import {CommonModule} from "@angular/common";
import {UIControlsModule} from "@solenopsys/ui-controls";

const components = [InfinityTableComponent];

@NgModule({
    imports: [
        CommonModule,
        InfiniteScrollModule,
        UIIconsModule,
        FormsModule,
        UtilsModule,
        AngularResizeEventModule,
        UIControlsModule],

    declarations: components,
    exports: [
        InfinityTableComponent
    ]
})
export class UIListsModule {
    constructor(private ds: DeclaredService) {
        ds.addComps("@solenopsys/ui-lists", components)
    }
}
