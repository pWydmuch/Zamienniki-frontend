import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KursyFormComponent } from './kursy-form.component';

describe('KursyFormComponent', () => {
  let component: KursyFormComponent;
  let fixture: ComponentFixture<KursyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KursyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KursyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
