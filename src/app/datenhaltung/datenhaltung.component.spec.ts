import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenhaltungComponent } from './datenhaltung.component';

describe('DatenhaltungComponent', () => {
  let component: DatenhaltungComponent;
  let fixture: ComponentFixture<DatenhaltungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatenhaltungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatenhaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
