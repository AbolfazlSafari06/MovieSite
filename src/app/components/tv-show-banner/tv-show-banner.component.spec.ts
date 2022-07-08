import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvBannerComponent } from './tv-show-banner.component';

describe('TvBannerComponent', () => {
  let component: TvBannerComponent;
  let fixture: ComponentFixture<TvBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvBannerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
