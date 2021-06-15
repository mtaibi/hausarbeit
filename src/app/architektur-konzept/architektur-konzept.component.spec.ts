import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitekturKonzeptComponent } from './architektur-konzept.component';

describe('ArchitekturKonzeptComponent', () => {
  let component: ArchitekturKonzeptComponent;
  let fixture: ComponentFixture<ArchitekturKonzeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitekturKonzeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitekturKonzeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
