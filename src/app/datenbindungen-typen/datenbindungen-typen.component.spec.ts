import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenbindungenTypenComponent } from './datenbindungen-typen.component';

describe('DatenbindungenTypenComponent', () => {
  let component: DatenbindungenTypenComponent;
  let fixture: ComponentFixture<DatenbindungenTypenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatenbindungenTypenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatenbindungenTypenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
