import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyDashboardComponent } from './zippy-dashboard.component';

describe('ZippyDashboardComponent', () => {
  let component: ZippyDashboardComponent;
  let fixture: ComponentFixture<ZippyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZippyDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZippyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
