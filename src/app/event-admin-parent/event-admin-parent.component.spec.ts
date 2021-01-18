import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAdminParentComponent } from './event-admin-parent.component';

describe('EventAdminParentComponent', () => {
  let component: EventAdminParentComponent;
  let fixture: ComponentFixture<EventAdminParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAdminParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAdminParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
