import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import { ChangeTableWidth, Check, Command,  LoadNextBatch, RowsGroup, RowsState } from "../rows.store";
import { ResizedEvent } from "angular-resize-event";
import { FieldType } from "@solenopsys/uimatrix-utils";


export const ICONS_TYPES: any = {};



ICONS_TYPES[FieldType.DATE] =
  '/assets/icons/01-Interface-Essential/21-Date-Calendar/calendar-date.svg';
ICONS_TYPES[FieldType.EUID] =
  '/assets/icons/01-Interface-Essential/27-Link-Unlink/hyperlink-3.svg';
ICONS_TYPES[FieldType.STRING_MULTILINE] =
  '/assets/icons/01-Interface-Essential/34-Text-Formating/text-style.svg';
ICONS_TYPES[FieldType.STRING] =
  '/assets/icons/01-Interface-Essential/34-Text-Formating/text-style.svg';
ICONS_TYPES[FieldType.UID] =
  '/assets/icons/01-Interface-Essential/28-Share/share.svg';
ICONS_TYPES[FieldType.BOOLEAN] =
  '/assets/icons/01-Interface-Essential/13-Controls/settings-toggle-horizontal.svg';
ICONS_TYPES[FieldType.NUMBER] =
  '/assets/icons/01-Interface-Essential/51-Paginate/paginate-filter-10.svg';
ICONS_TYPES[FieldType.DATETIME] =
  '/assets/icons/01-Interface-Essential/18-Time/watch-time.svg';
ICONS_TYPES[FieldType.FILE] =
  '/assets/icons/11-Content/02-Books/book-download-1.svg';
ICONS_TYPES[FieldType.CODE] =
  '/assets/icons/04-Programing-Apps-Websites/01-Programing/programming-browser-1.svg';


@Component({
  selector: 'fui-sinfinity-table',
  templateUrl: './sinfinity-table.component.html',
  styleUrls: ['./sinfinity-table.component.css']
})
export class SInfinityTableComponent {
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




