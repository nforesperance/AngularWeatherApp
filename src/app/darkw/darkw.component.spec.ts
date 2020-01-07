import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkwComponent } from './darkw.component';

describe('DarkwComponent', () => {
  let component: DarkwComponent;
  let fixture: ComponentFixture<DarkwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
