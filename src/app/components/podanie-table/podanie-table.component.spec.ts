import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodanieTableComponent } from './podanie-table.component';

describe('PodanieTableComponent', () => {
  let component: PodanieTableComponent;
  let fixture: ComponentFixture<PodanieTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodanieTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodanieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
