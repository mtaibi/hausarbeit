import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenbindungComponent } from './datenbindung.component';

describe('DatenbindungComponent', () => {
  let component: DatenbindungComponent;
  let fixture: ComponentFixture<DatenbindungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatenbindungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatenbindungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
