import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErklaerungMvcMvvmEtcComponent } from './erklaerung-mvc-mvvm-etc.component';

describe('ErklaerungMvcMvvmEtcComponent', () => {
  let component: ErklaerungMvcMvvmEtcComponent;
  let fixture: ComponentFixture<ErklaerungMvcMvvmEtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErklaerungMvcMvvmEtcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErklaerungMvcMvvmEtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
