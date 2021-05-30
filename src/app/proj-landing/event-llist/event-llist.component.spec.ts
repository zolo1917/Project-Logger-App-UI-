import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLListComponent } from './event-llist.component';

describe('EventLListComponent', () => {
  let component: EventLListComponent;
  let fixture: ComponentFixture<EventLListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventLListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
