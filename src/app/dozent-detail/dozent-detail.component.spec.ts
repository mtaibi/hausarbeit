import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DozentDetailComponent } from './dozent-detail.component';

describe('DozentDetailComponent', () => {
  let component: DozentDetailComponent;
  let fixture: ComponentFixture<DozentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DozentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DozentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
