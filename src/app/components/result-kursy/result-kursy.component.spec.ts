import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultKursyComponent } from './result-kursy.component';

describe('ResultKursyComponent', () => {
  let component: ResultKursyComponent;
  let fixture: ComponentFixture<ResultKursyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultKursyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultKursyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
