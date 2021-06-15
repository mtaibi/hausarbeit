import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestCrudHttpComponent } from './rest-crud-http.component';

describe('RestCrudHttpComponent', () => {
  let component: RestCrudHttpComponent;
  let fixture: ComponentFixture<RestCrudHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestCrudHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestCrudHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
