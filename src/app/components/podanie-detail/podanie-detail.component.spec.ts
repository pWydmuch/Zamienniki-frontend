import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodanieDetailComponent } from './podanie-detail.component';

describe('PodanieDetailComponent', () => {
  let component: PodanieDetailComponent;
  let fixture: ComponentFixture<PodanieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodanieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodanieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
