import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHideComponent } from './display-hide.component';

describe('DisplayHideComponent', () => {
  let component: DisplayHideComponent;
  let fixture: ComponentFixture<DisplayHideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayHideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
