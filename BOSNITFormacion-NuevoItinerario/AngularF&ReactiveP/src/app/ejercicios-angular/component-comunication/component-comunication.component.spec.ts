import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentComunicationComponent } from './component-comunication.component';

describe('ComponentComunicationComponent', () => {
  let component: ComponentComunicationComponent;
  let fixture: ComponentFixture<ComponentComunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentComunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentComunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
