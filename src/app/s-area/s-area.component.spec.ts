import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAreaComponent } from './s-area.component';

describe('SAreaComponent', () => {
  let component: SAreaComponent;
  let fixture: ComponentFixture<SAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
