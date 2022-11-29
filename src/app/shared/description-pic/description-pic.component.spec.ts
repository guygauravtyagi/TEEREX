import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionPicComponent } from './description-pic.component';

describe('DescriptionPicComponent', () => {
  let component: DescriptionPicComponent;
  let fixture: ComponentFixture<DescriptionPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionPicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
