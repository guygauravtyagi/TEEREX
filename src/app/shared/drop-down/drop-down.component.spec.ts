import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DropDownComponent } from './drop-down.component';

describe('DropDownComponent', () => {
  let component: DropDownComponent;
  let fixture: ComponentFixture<DropDownComponent>;
  let select: ElementRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ DropDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownComponent);
    component = fixture.componentInstance;
    select = fixture.debugElement.query(By.css('select'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create value for dropdown list', () => {
    expect(component.updateList(2)).toEqual([2,1,0]);
  });

  it('should emit when the selection is made', () => {
    spyOn(component, 'emitSelection');
    select.nativeElement.dispatchEvent(new Event('change'));
    expect(component.emitSelection).toHaveBeenCalled();
  });
});
