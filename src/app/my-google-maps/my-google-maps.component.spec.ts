/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyGoogleMapsComponent } from './my-google-maps.component';

describe('MyGoogleMapsComponent', () => {
  let component: MyGoogleMapsComponent;
  let fixture: ComponentFixture<MyGoogleMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGoogleMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGoogleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
