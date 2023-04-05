import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1DashboardComponent } from './test1-dashboard.component';

describe('Test1DashboardComponent', () => {
  let component: Test1DashboardComponent;
  let fixture: ComponentFixture<Test1DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test1DashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test1DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
