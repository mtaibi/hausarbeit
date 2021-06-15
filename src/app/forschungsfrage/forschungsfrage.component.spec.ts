import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForschungsfrageComponent } from './forschungsfrage.component';

describe('ForschungsfrageComponent', () => {
  let component: ForschungsfrageComponent;
  let fixture: ComponentFixture<ForschungsfrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForschungsfrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForschungsfrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
