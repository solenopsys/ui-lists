import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import { ChangeTableWidth, Check, Command,  LoadNextBatch, RowsGroup, RowsState } from "../rows.store";
import { ResizedEvent } from "@le2xx/angular-resize-event";
import { FieldType } from "@solenopsys/ui-utils";
import {ICONS_TYPES} from "../icons-mapping";


@Component({
  selector: 'ui-infinity-table',
  templateUrl: './infinity-table.component.html',
  styleUrls: ['./infinity-table.component.scss']
})
export class InfinityTableComponent {
  key!: string;

  ICONS = ICONS_TYPES;

  BOOL = FieldType.BOOLEAN;

  conf$!: Observable<RowsGroup>;

  constructor(private store: Store) {
  }

  @Input("key")
  set setDataInterface(key: string) {
    console.log("SET KEY---------",key)
    this.key = key;
    this.conf$ = this.store.select(RowsState.getByKey(key));
    this.store.dispatch(new LoadNextBatch(this.key))
  }

  onScrollDown() {
    this.store.dispatch(new LoadNextBatch(this.key))
  }

  onScrollUp() {
    console.log('scroll up');
  }

  commandEvent(type: string, rowElement: any, module: string, tableKey: string) {
    this.store.dispatch(new Command(module, tableKey, this.key, type, rowElement))
  }

  checkEvent(type: string, rowElement: boolean) {
    this.store.dispatch(new Check(this.key, type, rowElement))
  }

  onResized($event: ResizedEvent) {
    let width = $event.newRect.width;
    console.log("width",width)
    this.store.dispatch(new ChangeTableWidth(this.key,width))
  }
}




