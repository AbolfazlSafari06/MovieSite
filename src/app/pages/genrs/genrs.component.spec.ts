import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrsComponent } from './genrs.component';

describe('GenrsComponent', () => {
  let component: GenrsComponent;
  let fixture: ComponentFixture<GenrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
