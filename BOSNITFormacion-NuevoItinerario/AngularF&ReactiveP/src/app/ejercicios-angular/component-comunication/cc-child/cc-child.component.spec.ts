import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcChildComponent } from './cc-child.component';

describe('CcChildComponent', () => {
  let component: CcChildComponent;
  let fixture: ComponentFixture<CcChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
