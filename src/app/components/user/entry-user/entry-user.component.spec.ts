/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntryUserComponent } from './entry-user.component';

describe('EntryUserComponent', () => {
  let component: EntryUserComponent;
  let fixture: ComponentFixture<EntryUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
