import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRecordManagerComponent } from './simple-record-manager.component';

describe('SimpleRecordManagerComponent', () => {
  let component: SimpleRecordManagerComponent;
  let fixture: ComponentFixture<SimpleRecordManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleRecordManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleRecordManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
