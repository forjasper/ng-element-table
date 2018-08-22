import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgElementTableComponent } from './ng-element-table.component';

describe('NgElementTableComponent', () => {
  let component: NgElementTableComponent;
  let fixture: ComponentFixture<NgElementTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgElementTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgElementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
