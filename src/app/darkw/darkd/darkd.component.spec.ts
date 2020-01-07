import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkdComponent } from './darkd.component';

describe('DarkdComponent', () => {
  let component: DarkdComponent;
  let fixture: ComponentFixture<DarkdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
