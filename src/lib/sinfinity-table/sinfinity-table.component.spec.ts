import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SInfinityTableComponent} from './sinfinity-table.component';

describe('SInfinityTableComponent', () => {
  let component: SInfinityTableComponent;
  let fixture: ComponentFixture<SInfinityTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SInfinityTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SInfinityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
