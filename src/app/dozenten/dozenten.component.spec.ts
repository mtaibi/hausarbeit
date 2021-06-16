import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DozentenComponent } from './dozenten.component';

describe('DozentenComponent', () => {
  let component: DozentenComponent;
  let fixture: ComponentFixture<DozentenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DozentenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DozentenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
