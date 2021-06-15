import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazitComponent } from './fazit.component';

describe('FazitComponent', () => {
  let component: FazitComponent;
  let fixture: ComponentFixture<FazitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FazitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
