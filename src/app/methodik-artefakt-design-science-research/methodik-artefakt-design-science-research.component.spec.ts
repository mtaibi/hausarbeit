import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErklaerungArtefaktDesignScienceResearchComponent } from './methodik-artefakt-design-science-research.component';

describe('ErklaerungArtefaktDesignScienceResearchComponent', () => {
  let component: ErklaerungArtefaktDesignScienceResearchComponent;
  let fixture: ComponentFixture<ErklaerungArtefaktDesignScienceResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErklaerungArtefaktDesignScienceResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErklaerungArtefaktDesignScienceResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
