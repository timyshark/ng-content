import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRecordTilesComponent } from './simple-record-tiles.component';

describe('SimpleRecordTilesComponent', () => {
  let component: SimpleRecordTilesComponent;
  let fixture: ComponentFixture<SimpleRecordTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleRecordTilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleRecordTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
