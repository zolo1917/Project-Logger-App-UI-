import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjLandingComponent } from './proj-landing.component';

describe('ProjLandingComponent', () => {
  let component: ProjLandingComponent;
  let fixture: ComponentFixture<ProjLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
