import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CheckBoxComponent } from './check-box.component';

describe('CheckBoxComponent', () => {
  let component: CheckBoxComponent;
  let fixture: ComponentFixture<CheckBoxComponent>;
  let checkBox: ElementRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBoxComponent);
    component = fixture.componentInstance;
    checkBox = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when the checkBox is clicked', () => {
    spyOn(component, 'boxToggled');
    checkBox.nativeElement.click();
    expect(component.boxToggled).toHaveBeenCalled();
  });
});
